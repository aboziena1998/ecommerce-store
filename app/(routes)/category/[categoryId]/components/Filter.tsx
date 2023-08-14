'use client';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import qs from 'query-string';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FilterProps {
  data: Size[] | Color[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectValue = searchParams.get(valueKey);

  const onClick = (
    id: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;

      console.log(true);
    }


    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className=" text-lg font-semibold ">{name}</h3>

      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map(filter => {
          return (
            <div key={filter.id} className="flex items-center ">
              <Button
                onClick={event => onClick(filter.id, event)}
                className={cn(
                  'rounded-md text-sm text-gray-500 p-2 bg-white border border-gray-300',
                  selectValue === filter.id && 'bg-black text-white'
                )}
              >
                {filter.name}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
