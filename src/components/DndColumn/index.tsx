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
      {title}
      {children}
    </DndWrapper>
  );
};

const DndWrapper = tw.div`
bg-grayish-red
w-96
h-96
`;
export default DndColumn;
