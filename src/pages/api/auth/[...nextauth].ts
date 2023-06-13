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
    signIn: async ({ user, account, profile, session }: any) => {
      try {
        const exitedUser = await prisma.user.findMany({
          where: { email: user.email },
        });
        const exitedMingKingId = await prisma.user.findUnique({
          where: { mingkingId: user.email + user.id },
        });
        if (exitedUser && exitedMingKingId) {
          //이미 이메일이 있으면서
          //고유한 값도 있으면
          return Promise.resolve(true); //로그인 성공
        } else {
          //고유한 값이 없으면
          console.log('프로필', profile, user, account, session);
          if (account.provider === 'kakao') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
                mingkingId: user.email + user.id,
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

            const createdProfile = await prisma.profile.create({
              data: {
                userId: createdUser.id,
                nickname: profile.properties.nickname,
                name: profile.properties.nickname,
                profileImageUrl:
                  profile.kakao_account.profile.profile_image_url,
                thumbnailImageUrl:
                  profile.kakao_account.profile.thumbnail_image_url,
                birthdayType: profile.kakao_account.birthday_type,
                birthday: profile.kakao_account.birthday,
                age: profile.kakao_account.age_range,
                email: profile.kakao_account.email,
              },
            });
          } else if (account.provider === 'naver') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
                mingkingId: user.email + user.id,
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

            const createdProfile = await prisma.profile.create({
              data: {
                userId: createdUser.id,
                nickname: profile.response.nickname,
                name: profile.response.nickname,
                profileImageUrl: profile.response.profile_image,
                birthyear: profile.response.birthyear,
                birthday: profile.response.birthday,
                age: profile.response.age,
                gender: profile.response.gender,
                email: profile.response.email,
                mobile: profile.response.mobile,
                mobileE164: profile.response.mobile_e164,
              },
            });
          } else if (account.provider === 'google') {
            const createdUser = await prisma.user.create({
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
                mingkingId: user.email + user.id,
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
            const createdProfile = await prisma.profile.create({
              data: {
                userId: createdUser.id,
                nickname: profile.name,
                name: profile.family_name + profile.given_name,
                profileImageUrl: profile.picture,
                email: profile.email,
                // locale : profile.locale
              },
            });
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
