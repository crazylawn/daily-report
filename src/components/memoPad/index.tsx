import React from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';

interface MemoPadProps {
  bg?: string;
  content?: string;
}
const MemoPad = ({ bg, content, ...props }: MemoPadProps) => {
  return (
    <MemoWrapper bg={bg} {...props}>
      <MemoText>{content}</MemoText>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
  w-60
  h-60
  shadow-lg
  p-4
  `,

  css`
    background-color: ${bg};
  `,
]);
const MemoText = tw.div`

`;
export default MemoPad;
