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
      <MemoText bg={bg}>{content}</MemoText>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
  w-52
  h-52
  shadow-lg
  p-2
  m-2
  `,

  css`
    background-color: ${bg};
  `,
]);
const MemoText = styled.textarea<{ bg?: string }>(({ bg }) => [
  tw`
h-full
w-full
outline-none
resize-none
`,
  css`
    background-color: ${bg};
  `,
]);
export default MemoPad;
