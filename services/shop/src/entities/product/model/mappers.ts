import { type ProductUi } from './types';
import type { ProductsDto, ProductDto } from '../api';

export const mapProductsDtoToProductsUi = (productsDto?: ProductsDto): ProductUi[] => {
  const products: ProductUi[] =
    productsDto?.products.map(p => ({
      id: p?.id ?? NaN,
      title: p?.title ?? '',
      price: p?.price ?? NaN,
    })) ?? [];

  return products;
};

export const mapProductDtoToProductUi = (productDto?: ProductDto): ProductUi => ({
  id: productDto?.id ?? NaN,
  title: productDto?.title ?? '',
  price: productDto?.price ?? NaN,
});
