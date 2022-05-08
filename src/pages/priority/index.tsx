import React, { useState } from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MemoItem from './components/MemoItem';
import DndColumn from '@components/DndColumn';
const Priority = () => {
  const [isFirstColumn, setIsFirstColumn] = useState<boolean>(true);

  const PriorityItem = (
    <MemoItem bg="red" setIsFirstColumn={setIsFirstColumn} />
  );
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <DndColumn title="Todo List">{isFirstColumn && PriorityItem}</DndColumn>
        <DndColumn title=" No Todo List">
          {!isFirstColumn && PriorityItem}
        </DndColumn>
      </DndProvider>
    </div>
  );
};

export default Priority;
