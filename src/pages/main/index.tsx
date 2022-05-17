import React, { useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import MemoPad from '@components/MemoPad';
import { css } from '@emotion/react';
const Main = () => {
  const grayCircleList = useMemo(
    () => Array.from({ length: 14 }, (_, i) => <GrayCircle />),
    [],
  );
  return (
    <MainLayout>
      <MainRow>
        <CircleBox>{grayCircleList}</CircleBox>
        <div className="flex h-full w-full flex-col p-4 ">
          <Text>오늘의 할일 (9가지마법)</Text>
          <div className="mt-2 flex flex-wrap justify-center">
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFC470" />
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFBDAE" />
            <MemoPad bg="#FFC470" />
            <MemoPad bg="#B1D0FF" />
            <MemoPad bg="#FFEA79" />
            <MemoPad bg="#B1D0FF" />
            <MemoPad bg="#FFEA79" />
          </div>
          <div className="mt-7 flex justify-center">
            <button className=" h-full w-1/6 rounded-lg bg-dark-grayish-red text-white">
              저장
            </button>
          </div>
        </div>
        <RectangleBox>
          <RectangleTabBar bg="#E14141">일년목표</RectangleTabBar>
          <RectangleTabBar bg="#FA7719">한달목표</RectangleTabBar>
          <RectangleTabBar bg="#D7DB27">일주일목표</RectangleTabBar>
          <RectangleTabBar bg="#689C26">하루목표</RectangleTabBar>
        </RectangleBox>
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
mt-8
ml-4
mb-8

`;

const RectangleTabBar = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
h-1/4
w-24
rounded-lg
`,
  css`
    background-color: ${bg};
  `,
]);
const RectangleBox = tw.div``;
export default Main;
