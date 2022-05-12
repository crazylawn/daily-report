import React from 'react';
import tw from 'twin.macro';
import MemoPad from '@components/MemoPad';
const Main = () => {
  return (
    <MainLayout>
      <MainRow>
        <Text>오늘의 할일 (9가지마법)</Text>
        <MemoPad bg="#FFBDAE" />
        <MemoPad bg="#FFC470" />
        <button>초기버튼</button>
      </MainRow>
    </MainLayout>
  );
};

const MainLayout = tw.div`
w-full
h-full
flex items-center
justify-center

`;
const MainRow = tw.div`
flex
sm:w-full h-full
md:w-full h-full
lg:w-2/4 h-257
xl:w-2/4 h-257
bg-more-light-grayish-red
rounded-lg
`;
const Text = tw.div`
text-grayish-red
`;

export default Main;
