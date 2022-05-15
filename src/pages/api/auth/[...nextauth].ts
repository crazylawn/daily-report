import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: async ({ user, account, profile }: any) => {
      try {
        const KexitedUser = await prisma.user.findUnique({
          where: { email: 'K' + user.email },
        });
        const NexitedUser = await prisma.user.findUnique({
          where: { email: 'N' + user.email },
        });
        const GexitedUser = await prisma.user.findUnique({
          where: { email: 'G' + user.email },
        });

        if (KexitedUser || NexitedUser || GexitedUser) {
          return Promise.resolve(true);
        } else {
          console.log('create###', user, account);
          if (account.provider === 'kakao') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: 'K' + user.email,
                image: user.image,
              },
            });
            const createdAccount = await prisma.account.create({
              data: {
                userId: createdUser.id,
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
                email: 'N' + user.email,
                image: user.image,
              },
            });
            const createdAccount = await prisma.account.create({
              data: {
                userId: createdUser.id,
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
            console.log('새로운', createdAccount, createdUser);
          } else if (account.provider === 'google') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: 'G' + user.email,
                image: user.image,
              },
            });
            const createdAccount = await prisma.account.create({
              data: {
                userId: createdUser.id,
                providerType: account.type,
                providerId: account.provider,
                providerAccountId: account.providerAccountId,
                accessToken: account.access_token,
                tokenType: account.token_type,
                refreshToken: account.refresh_token,
                scope: account.scope,
                refreshTokenExpires: account.refresh_token_expires_in,
                idToken: account.id_token,
              },
            });
            console.log('새로운', createdAccount, createdUser);
          }

          return Promise.resolve(true);
        }
      } catch (e) {
        console.log(e);
        return Promise.reject(true);
      }
    },
  },
});
