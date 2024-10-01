import { DOMAINE } from "@/constante";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string,
  language: string
) => {
  const confirmLink = `${DOMAINE}/${language}/auth/new-verification?token=${token}`;
  console.log("LINK", confirmLink);

  await resend.emails.send({
    from: process.env.NEXT_PUBLIC_FROM_EMAIL as string,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  });
};
