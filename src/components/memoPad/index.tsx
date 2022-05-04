import React from 'react';
import tw from 'twin.macro';
const MemoPad = () => {
  return (
    <MemoWrapper>
      <MemoText></MemoText>
    </MemoWrapper>
  );
};

const MemoWrapper = tw.div`
bg-red-orange
w-20
h-20
`;
const MemoText = tw.div`

`;
export default MemoPad;
