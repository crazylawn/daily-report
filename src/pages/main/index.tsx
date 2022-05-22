import React from 'react';
import tw from 'twin.macro';
import MemoPad from '@components/MemoPad';
const Main = () => {
  return (
    <div>
      <Text>오늘의 할일 (9가지마법)</Text>
      <MemoPad bg="#FFBDAE" />
      <MemoPad bg="#FFC470" />
      <button>초기버튼</button>
    </div>
  );
};

const Text = tw.div`
text-grayish-red
`;

export default Main;
