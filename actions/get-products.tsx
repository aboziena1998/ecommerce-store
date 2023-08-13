import qs from 'query-string';

import { Product } from '@/types';
import env from '@/env';
const URL = `${env.NEXT_PUBLIC_API_URL}/products`;
interface Query {
  categoryId: string;
  colorId: string;
  sizeId: string;
  isFeatured: boolean;
}
const GetProducts = async (qeury: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: qeury.colorId,
      sizeId: qeury.sizeId,
      categoryId: qeury.categoryId,
      isFeatured: qeury.isFeatured,
    },
  });
  const res = await fetch(URL);
  return res.json();
};

export default GetProducts;
