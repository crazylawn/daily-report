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
w-60
h-60
shadow-lg 
`;
const MemoText = tw.div`

`;
export default MemoPad;
