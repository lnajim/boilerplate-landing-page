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
      if (!existingUser) return false;
      // if (!existingUser?.emailVerified) return false;
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.name = token.name as string;

        session.user.phone = token.phone as string;
        session.user.configured = token.configured as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.name = existingUser.name;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),

  session: { strategy: "jwt" },
  ...authConfig,
});
