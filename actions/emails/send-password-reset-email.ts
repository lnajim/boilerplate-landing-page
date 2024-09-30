import { DOMAINE } from "@/constante";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${DOMAINE}/auth/new-password?token=${token}`;
  await resend.emails.send({
    from: process.env.NEXT_PUBLIC_FROM_EMAIL as string,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
  });
};
