import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Notebook from './notebook';

const Home: NextPage = () => {
  return (
    <div>
      <Notebook />
    </div>
  );
};

export default Home;
