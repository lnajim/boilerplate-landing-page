"use server";
import { signIn } from "@/auth";
//import { sendVerificationEmail } from '@/emails/send-verification-email';
import { generateVerificationToken } from "@/lib/token";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";
import { getUserByEmail } from "@/actions/user";
import bcrypt from "bcryptjs";

export const login = async (values: z.infer<typeof LoginSchema>) => {
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

  // If we reach here, login is successful
  return { success: true };
};
