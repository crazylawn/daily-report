import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface useNodeProps {
  key: string;
  default: boolean;
}

export const useNode = create<any>((set: any) => ({
  key: 'isModeNode',
  default: true,

  setDefault: () =>
    set((state: useNodeProps) => ({
      default: !state.default,
    })),
}));
