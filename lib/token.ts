import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prismadb";
import { getVerificationTokenByEmail } from "@/helpers/verificatino-token";
import { getPasswordResetTokenByEmail } from "@/helpers/password-reset-token";

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};
/**
 * Generates a verification token for the given email address.
 * If there is an existing verification token for the email, it deletes the existing token.
 * The generated token is stored in the database along with the email and expiration date.
 *
 * @param email The email address for which the verification token is generated
 * @returns The generated verification token object
 */
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
