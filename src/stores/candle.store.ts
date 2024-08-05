import { create } from 'zustand';

interface ICandleState {
  isLit: boolean;
  candleNumber: number;
}

interface ICandleActions {
  toggleIsLit: () => void;
  setCandleNumber: (value: number) => void;
}

export const useCandleStore = create<ICandleState & ICandleActions>((set) => ({
  isLit: true,
  candleNumber: 1,

  toggleIsLit: () => set(({ isLit }) => ({ isLit: !isLit })),

  setCandleNumber: (value) =>
    set({ candleNumber: Math.max(1, Math.floor(value)) }),
}));
