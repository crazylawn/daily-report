import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface useNodeProps {
  key: string;
  default: any;
}

export const useNode = create<any>((set: any) => ({
  key: 'isModeNode',
  default: true,
  setDefault: () =>
    set((state: useNodeProps) => ({
      default: !state.default,
    })),
}));

// 노드의 추가, 삭제, 수정시 참조되는 상태
export const useNodeInput = create<any>((set: any) => ({
  key: 'nodeInput',
  default: '',
  setDefault: (text: useNodeProps) =>
    set(() => ({
      default: text,
    })),
}));

//몇번째 노드 아이디인지
export const useCurrentNodeId = create<any>((set: any) => ({
  key: 'currentNodeId',
  default: 0,
  setDefault: () =>
    set((state: useNodeProps) => ({
      default: state.default + 1,
    })),
}));
