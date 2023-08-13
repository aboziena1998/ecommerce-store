import { Billboard } from '@/types';
import env from '@/env';
const URL = `${env.NEXT_PUBLIC_API_URL}/billboards`;

const Getbillboards = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default Getbillboards;
