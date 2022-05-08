import React from 'react';
import tw from 'twin.macro';
import { useDrop } from 'react-dnd';

interface DndColumnProps {
  bg?: string;
  children?: any;
  className?: string;
  title: string;
}
const DndColumn = ({ bg, children, className, title }: DndColumnProps) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'text',
    drop: () => ({ name: 'crazy' }),
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
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
`;
export default DndColumn;
