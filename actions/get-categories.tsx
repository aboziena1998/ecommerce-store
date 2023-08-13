import { Category } from '@/types';
import env from '@/env';
const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

const GetCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default GetCategories;
