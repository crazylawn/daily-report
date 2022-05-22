import React, { useState, useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PriorityPad } from '@components/PriorityPad';
import DndColumn from '@components/DndColumn';

interface PriorityProps {
  id: number;
  content: string;
  column: string;
}
const Priority = () => {
  //오늘 할일 리스트들!! main에 있는 데이터 가져와서 사용
  //드래그앤드롭 : 왔다갔다하면서 column 값 바뀜
  const [items, setItems] = useState<PriorityProps[]>([
    { id: 1, content: 'crazy1', column: 'Todo List' },
    { id: 2, content: 'crazy2', column: 'Todo List' },
    { id: 3, content: 'crazy3', column: 'Todo List' },
    { id: 4, content: 'crazy4', column: 'No Todo List' },
    { id: 5, content: 'crazy5', column: 'Much List' },
  ]);

  const returnItemsForColumn = (columnName: string) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item) => {
        return (
          <PriorityPad
            key={item.id}
            bg="black"
            content={item.content}
            setItems={setItems}
          />
        );
      });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <PriorityLayout>
        <PriorityRow>
          <div className="flex w-full bg-more-light-grayish-red">
            <DndColumn title="Todo List">
              {returnItemsForColumn('Todo List')}
            </DndColumn>
            <DndColumn title="No Todo List">
              {returnItemsForColumn('No Todo List')}
            </DndColumn>
            <DndColumn title="Much List">
              {returnItemsForColumn('Much List')}
            </DndColumn>
            <DndColumn title="Urgent workList">
              {returnItemsForColumn('Urgent workList')}
            </DndColumn>
          </div>
        </PriorityRow>
      </PriorityLayout>
    </DndProvider>
  );
};

const PriorityLayout = tw.div`
w-full
h-full
flex items-center
justify-center
`;

const PriorityRow = tw.div`
flex
w-full h-full
bg-more-light-grayish-red
rounded-lg
`;

export default Priority;
