import GetProduct from '@/actions/get-product';
import GetProducts from '@/actions/get-products';
import Info from '@/components/Info';
import ProductList from '@/components/ProductList';
import Gallery from '@/components/gallery';
import Container from '@/components/ui/container';
import React from 'react';

interface ProdutPageProps {
  params: {
    productId: string;
  };
}
const ProductPage: React.FC<ProdutPageProps> = async ({ params }) => {
  const product = await GetProduct(params.productId);
  const suggestedProduct = await GetProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className=" px-4 py-10 sm:px-0 lg:px-8">
          <div className=" lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="">
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-9">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10 " />
          <ProductList title="Related Items" items={suggestedProduct} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
