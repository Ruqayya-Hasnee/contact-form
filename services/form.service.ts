import axios from 'axios';
import type { FormFields } from '@/store/store.interface';

export const submitContactForm = async (values: FormFields) => {
    return await axios.post(process.env.NEXT_PUBLIC_API_URL!, values).then((res) => res.data);
};