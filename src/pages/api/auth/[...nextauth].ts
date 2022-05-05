import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, profile }: any) => {
      console.log(user, account, profile, 'try signin');

      try {
        // const exitedUser = await prisma.user.findUnique({
        //   where: { email: user.email },
        // });
        const exitedUser = await prisma.user.findUnique({
          where: { email: user.email },
        });
        if (exitedUser) {
          console.log(exitedUser, 'get user!!');
          return Promise.resolve(true);
        } else {
          console.log('create###', user.name, user.email);
          const createdUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image,
            },
          });
          console.log(createdUser, 'created user!');
          return Promise.resolve(true);
        }
      } catch (e) {
        console.log(e);
        return Promise.reject(true);
      }
    },
  },
});
