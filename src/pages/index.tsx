import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Notebook from './notebook';
import { signIn, signOut, useSession } from 'next-auth/client';
const Home: NextPage = () => {
  const [session, loading] = useSession();
  if (typeof window !== 'undefined' && loading) return null;

  return (
    <div>
      {!session && (
        <button onClick={() => signIn('kakao')}>카카오로그인</button>
      )}
      {session && <button onClick={() => signOut()}>카카오로그아웃</button>}
      <Notebook />
    </div>
  );
};

export default Home;
