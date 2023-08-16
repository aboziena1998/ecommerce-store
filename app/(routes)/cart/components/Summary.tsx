'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Button from '@/components/ui/Button';
import Currency from '@/components/ui/Currency';
import useCart from '@/hooks/use-cart';

const Summary = () => {
  const [isMounted, setIsMounted] = useState(false);
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);
  const searchParams = useSearchParams();

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckOut = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map(item => item.id),
      }
    );
    window.location = res.data.url;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (searchParams.get('sucess')) {
      toast.success('payment completed');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('Something went wrong');
    }
  }, [searchParams, removeAll]);

  if (!isMounted) return null;

  return (
    <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 sm:col-span-5 lg:mt-0 lg:p-0">
      <h2 className="text-gray-500 text-lg font-medium">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className=" text-base font-medium text-gray-500">
            Order total
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6 " onClick={onCheckOut}>
        ChickOut
      </Button>
    </div>
  );
};

export default Summary;
