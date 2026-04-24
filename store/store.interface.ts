import { FormFields } from "@/types/form.types";

export type Submission = FormFields & {
  key: string;
};

export type SubmissionsStore = {
  submissions: Submission[];
  addSubmission: (name: string, email: string, message: string) => void;
};