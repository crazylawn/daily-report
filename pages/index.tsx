import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="dark">
      <div className="bg-white dark:bg-gray-800 h-80">
        <h1 className="text-3xl font-bold underline">hi~ darkMode </h1>
      </div>
    </div>
  );
};

export default Home;
