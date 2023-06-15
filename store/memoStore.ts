import create from 'zustand';
import { devtools } from 'zustand/middleware';
export interface UseMemoPadProps {
  fontSize: number;
}
export interface UseTextProps {
  inputText: string;
  text?: string;
}
interface TodoList {
  bg: string;
  content: string;
  isComplete: boolean;
  column: string;
}
export interface UseTodoProps {
  list: TodoList[];
  filter: string;
  item: any;
  todoList: TodoList[];
  setTodoList: (todoList: TodoList[]) => void;
  todoListFilter: string;
  setTodoListFilter: (todoListFilter: string) => void;
  filteredTodoList: Function;
  todoListState: Function;
}
export const useTodo = create<any>(
  devtools((set: any, get: any) => ({
    todoList: [],
    setTodoList: (list: UseTodoProps) => set({ todoList: list }),
    todoListFilter: 'all',
    setTodoListFilter: (filter: any) => set({ todoListFilter: filter }),
    filteredTodoList: () => {
      const filter = get().todoListFilter;
      const list = get().todoList;
      switch (filter) {
        case 'complete':
          return list.filter((item: any) => item.isComplete);
        case 'unComplete':
          return list.filter((item: any) => !item.isComplete);
        default:
          return list;
      }
    },

    todoListState: () => {
      const todoList = get().todoList;
      const totalNum = todoList.length;
      const totalCompleteNum = todoList.filter(
        (item: any) => item.isComplete,
      ).length;
      const totalUnCompleteNum = totalNum - totalCompleteNum;
      const percentCompleted =
        totalNum === 0 ? 0 : totalCompleteNum / totalUnCompleteNum;

      return {
        totalNum,
        totalCompleteNum,
        totalUnCompleteNum,
        percentCompleted,
      };
    },
  })),
);

export const useText = create((set) => ({
  inputText: '',
  setInputText: (text: UseTextProps) =>
    set(() => ({
      inputText: text,
    })),
}));

export const useMemoPad = create((set) => ({
  fontSize: 14,
  upFontSize: () =>
    set((state: UseMemoPadProps) => ({
      fontSize: state.fontSize + 1,
    })),
}));
