import React, { useMemo, useCallback } from 'react';
import tw, { styled } from 'twin.macro';
import MemoPad from '@components/MemoPad';
import { css } from '@emotion/react';
import { SVGS } from 'src/icons';

const Main = () => {
  const grayCircleList = useMemo(
    () => Array.from({ length: 16 }, (_, i) => <GrayCircle key={i} />),
    [],
  );

  const handleMemoAdd = useCallback(() => {
    alert('더하기');
  }, []);
  const handleMemoSave = useCallback(() => {
    alert('저장하기');
  }, []);
  return (
    <MainLayout>
      <MainRow>
        <CircleBox>{grayCircleList}</CircleBox>
        <div className="flex h-full w-full flex-col p-4 ">
          <div className="flex justify-center">
            <ImageWrapper>
              <SVGS.ARROW_LEFT />
            </ImageWrapper>
            <div className="flex ">
              <Text>오늘의 할일 (9가지마법)</Text>
              <ImageWrapper onClick={handleMemoAdd}>
                <SVGS.PLUS_BUTTON />
              </ImageWrapper>
            </div>
          </div>

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
            <button
              className=" h-full w-1/6 rounded-lg bg-dark-grayish-red text-white"
              onClick={handleMemoSave}
            >
              저장
            </button>
          </div>
        </div>
        <RectangleBox>
          <RectangleTabBar bg="#E14141">
            <TabText>일년목표</TabText>
          </RectangleTabBar>
          <RectangleTabBar bg="#FA7719">
            <TabText>한달목표</TabText>
          </RectangleTabBar>
          <RectangleTabBar bg="#BEC12D">
            <TabText>일주일목표</TabText>
          </RectangleTabBar>
          <RectangleTabBar bg="#689C26">
            <TabText>하루목표</TabText>
          </RectangleTabBar>
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
last-of-type:mb-6
`;
const Text = tw.div`
text-grayish-red
flex
justify-center
`;

const CircleBox = tw.div`
flex
justify-center
flex-col
ml-4


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

const TabText = tw.div`
flex
items-center
h-full
text-white
justify-center
`;
const ImageWrapper = tw.div`
ml-2
mr-5
w-5
h-5
cursor-pointer
`;
export default Main;
