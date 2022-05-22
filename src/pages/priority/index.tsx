import React, { useState, useMemo } from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MemoItem from './components/MemoItem';
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

  const [isFirstColumn, setIsFirstColumn] = useState<boolean>(true);

  const returnItemsForColumn = (columnName: string) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item) => {
        return (
          <MemoItem
            key={item.id}
            bg="red"
            content={item.content}
            setItems={setItems}
          />
        );
      });
  };
  // const PriorityItem = (
  //   <MemoItem bg="red" setIsFirstColumn={setIsFirstColumn} />
  // );
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div className="flex">
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
      </DndProvider>
    </div>
  );
};

export default Priority;
