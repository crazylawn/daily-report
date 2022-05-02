import React from 'react';
import tw from 'twin.macro';
import MemoPad from '@components/memoPad';
const Main = () => {
  return (
    <div>
      <Text>오늘의 할일 (9가지마법)</Text>
      <MemoPad />
    </div>
  );
};

const Text = tw.div`
text-grayish-red
`;

export default Main;
