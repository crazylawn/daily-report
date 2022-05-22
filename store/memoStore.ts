import create from 'zustand';

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
}
export interface UseTodoProps {
  list: TodoList[];
  filter: any;
  item: any;
  todoList: TodoList[];
  setTodoList: () => void;
  todoListFilter: string;
  setTodoListFilter: () => void;
  filteredTodoList: () => void;
  todoListState: Function;
  todoText: string;
  setTodoText: () => void;
}
export const useTodo = create((set, get) => ({
  //오늘 할일 리스트
  todoList: [],
  setTodoList: (list: UseTodoProps) => set(() => ({ todoList: list })),
  //오늘할일 필터링   : 한것 , 못한것
  todoListFilter: 'all',
  setTodoListFilter: (filter: UseTodoProps) =>
    set(() => ({
      todoListFilter: filter,
    })),
  //텍스트 ...
  todoText: '',
  setTodoText: (todoText: UseTodoProps) =>
    set(() => ({
      todoText: todoText,
    })),
  //필터링 조건
  filteredTodoList: () => {
    const filter = get().todoListFilter;
    const list = get().todoList;
    //switch 문
    switch (filter) {
      case 'complete':
      // return list.filter((item: UseTodoProps) => item.isComplete);
      case 'unComplete':
      // return list.filter((item: UseTodoProps) => !item.isComplete);
      default:
        return list;
    }
  },
  todoListState: () => {
    const todoList = get().todoList;
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter(
      (item: UseTodoProps) => item.isComplete,
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
}));

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
