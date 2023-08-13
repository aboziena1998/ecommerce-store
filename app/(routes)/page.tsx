import Getbillboards from '@/actions/get-billboards';
import GetProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/container';
import React from 'react';
export const revalidate = 0;
const HomePage = async () => {
  const products = await GetProducts({ isFeatured: true });
  const billboard = await Getbillboards('c9460297-ad7c-4e0f-b1a4-1bffb6b62683');

  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
