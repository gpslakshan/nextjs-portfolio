import { create } from "zustand";

interface ToggleStore {
  isClick: boolean;
  toggle: () => void;
}

const useToggleStore = create<ToggleStore>((set) => ({
  isClick: false,
  toggle: () => set((store) => ({ isClick: !store.isClick })),
}));

export default useToggleStore;
