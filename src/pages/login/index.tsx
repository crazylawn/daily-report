import React from 'react';
import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';
import { NextPage } from 'next';
interface IconProps {
  index: number;
}
const Login: NextPage = () => {
  return (
    <LoginWrapper>
      <Icon index={50}>
        twin.macro 를 이용해서 tailwind 와 emotion 적용완료!
      </Icon>
    </LoginWrapper>
  );
};

const LoginWrapper = tw.div`
text-3xl font-bold underline
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

export default Login;
