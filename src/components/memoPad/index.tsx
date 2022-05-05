import React from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
const MemoPad = ({ bg }: { bg?: string }) => {
  return (
    <MemoWrapper bg={bg}>
      <MemoText></MemoText>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
  w-60
  h-60
  shadow-lg`,
  css`
    background-color: ${bg};
  `,
]);
const MemoText = tw.div`

`;
export default MemoPad;
