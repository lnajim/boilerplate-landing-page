"use server";
import { signIn } from "@/auth";
//import { sendVerificationEmail } from '@/emails/send-verification-email';
import { generateVerificationToken } from "@/lib/token";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import { getUserByEmail } from "../user";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields !",
    };
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

    //  await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {
      success:
        "Your account is currently inactive. Please activate your account. A confirmation email has been sent!",
    };
  }
  if (
    existingUser.freeTrialExpiry &&
    existingUser.freeTrialExpiry < new Date()
  ) {
    return { error: "Your free trial period has expired!" };
  }

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: process.env.NEXT_PUBLIC_DOMAINE_URL
        ? `${process.env.NEXT_PUBLIC_DOMAINE_URL}/admin/dashboard`
        : "/admin/dashboard",
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
