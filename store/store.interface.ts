export type FormFields = {
  name: string;
  email: string;
  message: string;
};

export type Submission = FormFields & {
  key: string;
};
