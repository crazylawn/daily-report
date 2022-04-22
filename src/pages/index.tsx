import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="dark">
      <div className="h-100 bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold underline">Daily Report</h1>
      </div>
    </div>
  );
};

export default Home;
