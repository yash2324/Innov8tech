import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();
const prismaAdapter = PrismaAdapter(prisma);
const handler = NextAuth({
  adapter: prismaAdapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      let sessionWithId = session as any;
      if (sessionWithId.user) {
        sessionWithId.user.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_URLSECRET as string,
  debug: true,
});

export { handler as GET, handler as POST };
