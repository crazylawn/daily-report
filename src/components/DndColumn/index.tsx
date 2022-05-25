import React from 'react';
import tw from 'twin.macro';
import { useDrop } from 'react-dnd';

interface DndColumnProps {
  bg?: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  title: string;
}
const DndColumn = ({ bg, children, className, title }: DndColumnProps) => {
  const [, drop] = useDrop({
    accept: 'text',
    drop: () => ({ name: title }),
  });
  return (
    <DndWrapper ref={drop}>
      <DndBox>
        {title}
        {children}
      </DndBox>
    </DndWrapper>
  );
};

const DndWrapper = tw.div`
sm:w-full h-full
md:w-full h-full
w-20
// h-257
min-h-full
bg-sweet-corn
`;
const DndBox = tw.div`
bg-froly

rounded-lg
m-5
min-h-screen
`;
export default DndColumn;
