import { create } from 'zustand';
import type { SubmissionsStore } from './store.interface';

export const useSubmissionsStore = create<SubmissionsStore>((set) => ({
  submissions: [],
  addSubmission: (name, email, message) =>
    set((state) => ({
      submissions: [
        ...state.submissions,
        { key: crypto.randomUUID(), name, email, message },
      ],
    })),
}));
