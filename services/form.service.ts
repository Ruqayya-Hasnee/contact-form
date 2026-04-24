import axios from 'axios';
import type { FormFields } from '@/store/store.interface';

export const submitContactForm = (values: FormFields) =>
  axios.post(process.env.NEXT_PUBLIC_API_URL!, values);