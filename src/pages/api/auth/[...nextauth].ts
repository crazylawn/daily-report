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
      console.log(account, 'try signin');

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
          console.log('create###', user);
          if (account.provider === 'kakao') {
            const createdUser = await prisma.user.create({
              data: {
                userId: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
              },
            });
            const createdAccount = await prisma.account.create({
              data: {
                userId: user.id,
                compoundId: user.name,
                providerType: account.type,
                providerId: account.provider,
                providerAccountId: account.providerAccountId,
                accessToken: account.access_token,
                tokenType: account.token_type,
                refreshToken: account.refresh_token,
                scope: account.scope,
                refreshTokenExpires: account.refresh_token_expires_in,
              },
            });
          } else if (account.provider === 'naver') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
              },
            });
          }

          // console.log(createdUser, 'created user!');
          return Promise.resolve(true);
        }
      } catch (e) {
        console.log(e);
        return Promise.reject(true);
      }
    },
  },
});
