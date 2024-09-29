import NextAuth from "next-auth";
import prisma from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import authConfig from "@/auth.config";
import { getUserById } from "./actions/user";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      // Prevent sign in without email verification
      const existingUser = await getUserById(user.id as string);
      if (!existingUser?.emailVerified) return false;
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.firstname = token.firstname as string;
        session.user.lastname = token.lastname as string;
        session.user.phone = token.phone as string;
        session.user.configured = token.configured as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.firstname = existingUser.firstname;
      token.lastname = existingUser.lastname;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),

  session: { strategy: "jwt" },
  ...authConfig,
});
