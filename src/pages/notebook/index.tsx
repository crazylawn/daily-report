import React from 'react';
import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { NextPage } from 'next';
interface IconProps {
  index: number;
}
const Notebook: NextPage = () => {
  return (
    <NotebookLayout className="bg-[#fffff]">
      <ContentBox>
        <Title>Life Make it</Title>
        <ButtonWrapper>
          {/* w-28 이면 width  :width: 7rem; //112px  */}
          {/* rounded-lg 이면 border-radius: 0.5rem; //8px  */}
          <button className="h-10 w-28 rounded-lg bg-grayish-red">
            <Text>google Login</Text>
          </button>
          <button className="h-10 w-28 rounded-lg bg-grayish-red">
            <Text>kakao Login</Text>
          </button>
          <button className="h-10 w-28 rounded-lg bg-grayish-red">
            <Text> naver Login</Text>
          </button>
        </ButtonWrapper>
      </ContentBox>
      {/* <Icon index={50}>rkqt</Icon> */}
    </NotebookLayout>
  );
};
// tailwind설정파일에 있는 color 가져다 쓰는법!
const NotebookLayout = tw.div`
w-full
h-full
flex items-center
justify-center

`;
const ContentBox = tw.div`
w-2/4
h-257
bg-light-grayish-red
`;
const Title = tw.div`
`;
const Text = tw.span`
text-very-dark-grayish-red
`;
const ButtonWrapper = tw.div`
flex 
items-center 
justify-center
`;
const Icon = styled.div<IconProps>(({ index }) => [
  tw`
  md:w-32
  text-yellow-800
  text-lg
  `,
  css`
    position: relative;
    &::before {
      content: ${index};
      padding: ${index};
    }
  `,
]);

export default Notebook;
