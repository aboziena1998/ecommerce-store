import { Size } from '@/types';
import env from '@/env';
const URL = `${env.NEXT_PUBLIC_API_URL}/sizes`;

const Getsizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default Getsizes;
