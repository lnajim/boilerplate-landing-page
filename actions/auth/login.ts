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
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new AuthError("Invalid fields");
  }

  const { email, password } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (!user || !user.password) {
    throw new AuthError("Invalid credentials");
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (!passwordsMatch) {
    throw new AuthError("Invalid credentials");
  }

  try {
    const redirectLocale =
      locale && i18n.locales.includes(locale) ? locale : defaultLocale;
    const redirectTo = process.env.NEXT_PUBLIC_DOMAINE_URL
      ? `${process.env.NEXT_PUBLIC_DOMAINE_URL}/${redirectLocale}/admin/dashboard`
      : `/${redirectLocale}/admin/dashboard`;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!!!!!" };
      }
    }

    throw error;
  }
};
