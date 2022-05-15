import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Notebook from './notebook';
import { useSession, signIn, signOut } from 'next-auth/react';
const Home: NextPage = () => {
  // const { data: session } = useSession();
  const { data: session, status } = useSession();
  // if (typeof window !== 'undefined' && session) return null;
  if (status === 'authenticated') console.log('session', session, status);
  return (
    <div>
      {session ? (
        <>
          <button onClick={() => signOut()}>카카오로그아웃</button>
          <button onClick={() => signOut()}>네이버로그아웃</button>
          <button onClick={() => signOut()}>구글로그아웃</button>
        </>
      ) : (
        <>
          <button onClick={() => signIn('kakao')}>카카오로그인</button>
          <button onClick={() => signIn('naver')}>네이버로그인</button>
          <button onClick={() => signIn('google')}>구글로그인</button>
        </>
      )}
      <Notebook />
    </div>
  );
};

export default Home;
