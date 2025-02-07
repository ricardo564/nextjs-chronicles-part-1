import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IntroModalState {
  hasSeenModal: boolean;
  analyticsEnabled: boolean;
  lastVisit: string | null;
  setHasSeenModal: (value: boolean) => void;
  setAnalyticsEnabled: (value: boolean) => void;
  setLastVisit: (value: string) => void;
  clearAfterOneHour: () => void;
}

export const useIntroModalStore = create<IntroModalState>()(
  persist(
    (set) => ({
      hasSeenModal: false,
      analyticsEnabled: true,
      lastVisit: null,
      setHasSeenModal: (value) => set({ hasSeenModal: value }),
      setAnalyticsEnabled: (value) => set({ analyticsEnabled: value }),
      setLastVisit: (value) => set({ lastVisit: value }),
      clearAfterOneHour: () => {
        const oneHourAgo = new Date();
        oneHourAgo.setHours(oneHourAgo.getHours() - 1);

        set((state) => {
          if (state.lastVisit && new Date(state.lastVisit) < oneHourAgo) {
            return {
              hasSeenModal: false,
              analyticsEnabled: true,
              lastVisit: null,
            };
          }
          return state;
        });
      },
    }),
    {
      name: "intro-modal-storage",
    }
  )
);
