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
  const [items, setItems] = useState<PriorityProps[]>([
    { id: 1, content: 'crazy1', column: 'Todo List' },
    { id: 2, content: 'crazy2', column: 'Todo List' },
    { id: 3, content: 'crazy3', column: 'Todo List' },
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
        <DndColumn title="Todo List">
          {returnItemsForColumn('Todo List')}
        </DndColumn>
        <DndColumn title=" No Todo List">
          {returnItemsForColumn('No Todo List')}
        </DndColumn>
      </DndProvider>
    </div>
  );
};

export default Priority;
