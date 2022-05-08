import React, { useCallback } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface MemoItemProps {
  bg?: string;
  content?: string;
  setItems?: any;
}
const MemoItem = ({ bg, content, setItems, ...props }: MemoItemProps) => {
  const changeItemColumn = useCallback(
    (currentItem: any, columnName: string) => {
      setItems((prevState: any) => {
        return prevState.map((e: any) => {
          return {
            ...e,
            column: e.content === currentItem.content ? columnName : e.column,
          };
        });
      });
    },
    [],
  );
  const [{ isDragging }, drag] = useDrag({
    type: 'text',
    item: { content },
    end: (item, monitor: DragSourceMonitor) => {
      //이제 droppable 항목에 대한 종료 로직을 추가
      // 즉, 사용자가 드래그 후 버튼을 놓을때 수행해야하는 작업

      const dropResult: any = monitor.getDropResult();
      if (dropResult && dropResult.content === 'Todo List') {
        changeItemColumn(item, 'Todo List');
      } else {
        changeItemColumn(item, 'No Todo List');
      }
    },
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
