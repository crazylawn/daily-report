import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Notebook from './notebook';
import { useSession, signIn, signOut } from 'next-auth/react';
// import { signIn, signOut, useSession } from 'next-auth/react';
const Home: NextPage = () => {
  const { data: session } = useSession();
  if (typeof window !== 'undefined' && session) return null;
  
  return (
    <div>
      {!session && <button onClick={() => signIn()}>카카오로그인</button>}
      {session && <button onClick={() => signOut()}>카카오로그아웃</button>}
      <Notebook />
    </div>
  );
};

export default Home;
