import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MemoItem from './components/MemoItem';
const Priority = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <MemoItem bg="red" />
      </DndProvider>
    </div>
  );
};

export default Priority;
