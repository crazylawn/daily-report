import React from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface MemoItemProps {
  bg?: string;
  content?: string;
}
const MemoItem = ({ bg, content, ...props }: MemoItemProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'text',
    item: { name: '정민경', type: '개발자' },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <MemoWrapper ref={drag} bg={bg} {...props} style={{ opacity }}>
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
export default MemoItem;
