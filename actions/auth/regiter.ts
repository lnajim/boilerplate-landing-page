"use server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prismadb";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "../user";
//import { sendVerificationEmail } from '@/emails/send-verification-email';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields !",
    };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 12);
  if (email) {
    const userAlreadyExist = await getUserByEmail(email);
    if (userAlreadyExist) {
      return {
        warning: "User already exist ",
      };
    }
  }

  const now = new Date();
  const freeTrialExpiry = new Date(now);
  freeTrialExpiry.setDate(now.getDate() + 7);
  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,

      freeTrialExpiry: freeTrialExpiry,
    },
  });

  //TODO: Send Verification token email
  const verificationToken = await generateVerificationToken(email);
  //  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return {
    success: "Confirmation email send",
  };
};
