import React, { useState, useMemo, useEffect, memo } from 'react';
import tw, { styled } from 'twin.macro';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PriorityPad } from '@components/PriorityPad';
import DndColumn from '@components/DndColumn';
import { useTodo } from 'store/memoStore';

interface PriorityProps {
  // id: number;
  content: string;
  column: string;
}
const Priority = () => {
  //오늘 할일 리스트들!!
  //main에 있는 데이터 가져와서 사용 
  //드래그앤드롭 : 왔다갔다하면서 column 값 바뀜 : O
  const [items, setItems] = useState<PriorityProps[]>([
    { content: 'crazy1', column: 'Todo List' },
    { content: 'crazy2', column: 'Todo List' },
    { content: 'crazy3', column: 'Todo List' },
  ]);

  const [memoComponent, setMemoComponent] = useTodo((state: any) => [
    state.todoList,
    state.setTodoList,
  ]);
  useEffect(() => {
    if (!memoComponent) return;
    const localMemoItem = localStorage.getItem('memoItem');
    if (localMemoItem !== null) {
      const parseMemoItem = JSON.parse(localMemoItem);
      setMemoComponent(parseMemoItem);
    }

    return () => {};
  }, []);
  // filter is not a function
  // 객체를 필터 함수에 전달하고 필터가 배열에서만 작동하기 때문에 발생하는 오류
  const returnItemsForColumn = (columnName: string) => {
    return memoComponent
      .filter((item: any) => item.column === columnName)
      .map((item: any, i: number) => {
        return (
          <PriorityPad
            key={i}
            bg="white"
            content={item.content}
            setMemoComponent={setMemoComponent}
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
