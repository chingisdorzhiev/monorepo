import React from 'react';
import { useProducts } from '~shared/api';
import { ProductCard } from '~entities/product';

import { mapProductsDtoToProductsUi } from '../model/mappers';

export const ProductsPage: React.FC = () => {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products...</div>; // ui-kit
  if (error) return <div>Error loading products</div>; // ui-kit

  const products = mapProductsDtoToProductsUi(data);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
