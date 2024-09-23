import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  firstname: string;
  lastname: string;
  phone: string;
  configured: boolean;
  widgetColor: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
