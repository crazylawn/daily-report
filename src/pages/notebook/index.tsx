import React from 'react';
import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
interface IconProps {
  index: number;
}

//이건 정말 꼭 알아야해!!!
// flex-row	flex-direction: row;
// flex-row-reverse	flex-direction: row-reverse;
// flex-col	flex-direction: column;
// flex-col-reverse	flex-direction: column-reverse;
const Notebook: NextPage = () => {
  const reuter = useRouter();
  const onMovePage = () => {
    reuter.push('/main');
  };
  return (
    <NotebookLayout className="bg-[#fffff]">
      <NotebookRow>
        <TipBox />
        <ContentBox>
          <Title>Life Make it</Title>
          <ButtonWrapper>
            {/* w-28 이면 width  :width: 7rem; //112px  */}
            {/* rounded-lg 이면 border-radius: 0.5rem; //8px  */}
            <button
              className="h-10 w-28 rounded-lg bg-grayish-red"
              onClick={onMovePage}
            >
              <Text>google Login</Text>
            </button>
            <button
              className="h-10 w-28 rounded-lg bg-grayish-red"
              onClick={onMovePage}
            >
              <Text>kakao Login</Text>
            </button>
            <button
              className="h-10 w-28 rounded-lg bg-grayish-red"
              onClick={onMovePage}
            >
              <Text> naver Login</Text>
            </button>
          </ButtonWrapper>
        </ContentBox>
      </NotebookRow>

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

const NotebookRow = tw.div`
flex
sm:w-full h-full
md:w-full h-full
lg:w-2/4 h-257
xl:w-2/4 h-257


bg-light-grayish-red
rounded-lg
`;
const TipBox = tw.div`
w-20
h-257
bg-grayish-red
rounded-lg
`;
const ContentBox = tw.div`
w-full
flex
flex-col
items-center
gap-5
mt-60

`;
const Title = tw.div`
text-very-dark-grayish-red
text-3xl
`;
const Text = tw.span`
text-very-dark-grayish-red
`;
const ButtonWrapper = tw.div`
w-full
flex 
items-center 
justify-center
gap-3
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
