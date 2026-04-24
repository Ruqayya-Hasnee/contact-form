import { FormFields } from '@/types/form.types';
import axios from 'axios';

export const submitContactForm = async (values: FormFields) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, values).then((res) => res.data);
};