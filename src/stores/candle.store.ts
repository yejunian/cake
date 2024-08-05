import { create } from 'zustand';

interface ICandleState {
  isLit: boolean;
}

interface ICandleActions {
  toggleIsLit: () => void;
}

export const useCandleStore = create<ICandleState & ICandleActions>((set) => ({
  isLit: true,

  toggleIsLit: () => set(({ isLit }) => ({ isLit: !isLit })),
}));
