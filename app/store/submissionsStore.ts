import { create } from 'zustand';

export type Submission = {
  key: string;
  name: string;
  email: string;
  message: string;
};

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
