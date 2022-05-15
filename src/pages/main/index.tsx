import React, { useMemo } from 'react';
import tw from 'twin.macro';
import MemoPad from '@components/MemoPad';
const Main = () => {
  const grayCircleList = useMemo(
    () => Array.from({ length: 15 }, (_, idx) => <GrayCircle />),
    [],
  );
  return (
    <MainLayout>
      <MainRow>
        <CircleBox>{grayCircleList}</CircleBox>
        <div className="flex h-full w-full flex-col p-4 ">
          <Text>오늘의 할일 (9가지마법)</Text>
          <div className="flex flex-wrap">
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFC470" />
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFC470" />
          </div>
          <button className="bg-dark-grayish-red text-white">저장</button>
        </div>
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
lg:w-2/4  h-full
xl:w-2/4  h-full
bg-more-light-grayish-red
rounded-lg

`;

const GrayCircle = tw.div`
bg-light-gray
w-10 h-10
rounded-3xl
mt-6
`;
const Text = tw.div`
text-grayish-red
flex
justify-center
`;

const CircleBox = tw.div`
mt-14
ml-4
`;
export default Main;
