import qs from 'query-string';

import { Category } from '@/types';
import env from '@/env';
const URL = `${env.NEXT_PUBLIC_API_URL}/categories`;

const GetCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default GetCategory;
