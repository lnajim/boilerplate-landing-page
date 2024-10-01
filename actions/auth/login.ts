"use server";
import { signIn } from "@/auth";
//import { sendVerificationEmail } from '@/emails/send-verification-email';
import { generateVerificationToken } from "@/lib/token";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import { getUserByEmail } from "@/actions/user";
import bcrypt from "bcryptjs";
import { i18n, defaultLocale } from "@/i18n-config";
import { sendVerificationEmail } from "../emails/send-verification-email";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  language: string
) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Email does not exist!" };
    }

    if (!existingUser.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );

      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
        language
      );

      return {
        success:
          "Your account is currently inactive. Please activate your account. A confirmation email has been sent!",
      };
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordsMatch) {
      return { error: "Invalid credentials" };
    }

    const redirectTo = process.env.NEXT_PUBLIC_DOMAINE_URL
      ? `${process.env.NEXT_PUBLIC_DOMAINE_URL}/admin/dashboard`
      : `/admin/dashboard`;

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true, redirectTo };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An unexpected error occurred" };
  }
};
