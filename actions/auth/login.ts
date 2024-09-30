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

export const login = async (
  values: z.infer<typeof LoginSchema>,
  locale?: string
) => {
  try {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields" };
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.password) {
      return { error: "Invalid credentials" };
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordsMatch) {
      return { error: "Invalid credentials" };
    }

    const redirectLocale =
      locale && i18n.locales.includes(locale) ? locale : defaultLocale;
    const redirectTo = process.env.NEXT_PUBLIC_DOMAINE_URL
      ? `${process.env.NEXT_PUBLIC_DOMAINE_URL}/${redirectLocale}/admin/dashboard`
      : `/${redirectLocale}/admin/dashboard`;

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
