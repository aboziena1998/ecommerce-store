import GetCategory from '@/actions/get-category';
import GetColors from '@/actions/get-colors';
import GetProducts from '@/actions/get-products';
import Getsizes from '@/actions/get-sizes';
import Billboard from '@/components/Billboard';
import Container from '@/components/ui/container';
import React from 'react';
import Filter from './components/Filter';
import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;
interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  searchParams,
  params,
}) => {
  const products = await GetProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await Getsizes();
  const colors = await GetColors();
  const category = await GetCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 ">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block ">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className=" mt-6 lg:col-span-4 lg:mt-0 ">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(item => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
