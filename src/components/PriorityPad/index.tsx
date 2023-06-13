import React, { useCallback } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

interface PriorityPadProps {
  bg?: string;
  content?: string;
  setMemoComponent?: any;
}
export const PriorityPad = ({
  bg,
  content,
  setMemoComponent,
  ...props
}: PriorityPadProps) => {
  const changeItemColumn = useCallback(
    (currentItem: any, columnName: string) => {
      setMemoComponent((prevState: any) => {
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

  // const changeItemColumn = useCallback(
  //   (currentItem: any, columnName: string) => {
  //     setMemoComponent((prevState: any) => {
  //       return prevState.map((e: any) => {
  //         return {
  //           ...e,
  //           column: e.content === currentItem.content ? columnName : e.column,
  //         };
  //       });
  //     });
  //   },
  //   [],
  // );

  const [{ isDragging }, drag] = useDrag({
    type: 'text',
    item: { content },
    end: (item, monitor: DragSourceMonitor) => {
      //이제 droppable 항목에 대한 종료 로직을 추가
      // 즉, 사용자가 드래그 후 버튼을 놓을때 수행해야하는 작업

      const dropResult: any = monitor.getDropResult();
      console.log('[dropResult]', dropResult && dropResult.name);
      if (dropResult && dropResult.name === 'Todo List') {
        changeItemColumn(item, 'Todo List');
      } else if (dropResult && dropResult.name === 'No Todo List') {
        changeItemColumn(item, 'No Todo List');
      } else if (dropResult && dropResult.name === 'Much List') {
        changeItemColumn(item, 'Much List');
      } else {
        changeItemColumn(item, 'Urgent workList');
      }
    },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <PriorityWrapper ref={drag} bg={bg} {...props} style={{ opacity }}>
      <PriorityText>{content}</PriorityText>
    </PriorityWrapper>
  );
};

const PriorityWrapper = styled.div<{ bg?: string }>(({ bg }) => [
  tw`
  w-80
  h-20
  shadow-lg
  rounded-lg
  text-green-800
  border-2
  border-dashed
  border-current
  p-4
  mb-4
  `,

  css`
    background-color: ${bg};
  `,
]);
const PriorityText = tw.div`

`;
