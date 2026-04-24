import { create } from 'zustand';
import type { Submission } from './store.interface';

type SubmissionsStore = {
  submissions: Submission[];
  addSubmission: (name: string, email: string, message: string) => void;
};

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
