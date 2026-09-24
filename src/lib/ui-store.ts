import { create } from "zustand";

type UiState = {
  consultOpen: boolean;
  videoOpen: boolean;
  applyJob: string | null;
  openConsult: () => void;
  closeConsult: () => void;
  openVideo: () => void;
  closeVideo: () => void;
  openApply: (job: string) => void;
  closeApply: () => void;
};

export const useUi = create<UiState>((set) => ({
  consultOpen: false,
  videoOpen: false,
  applyJob: null,
  openConsult: () => set({ consultOpen: true }),
  closeConsult: () => set({ consultOpen: false }),
  openVideo: () => set({ videoOpen: true }),
  closeVideo: () => set({ videoOpen: false }),
  openApply: (job) => set({ applyJob: job }),
  closeApply: () => set({ applyJob: null }),
}));
