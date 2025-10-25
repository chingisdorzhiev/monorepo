import { type ProductUi } from './types';
import type { ProductsDto, ProductDto } from '../api';

export const mapProductDtoToProductUi = (productDto: ProductDto): ProductUi => ({
  id: productDto.id,
  title: productDto.title,
  description: productDto.description,
  price: productDto.price,
  discount: productDto.discountPercentage,
  rating: productDto.rating,
  stock: productDto.stock,
  brand: productDto.brand,
  images: productDto.images,
  thumbnail: productDto.thumbnail,
  tags: productDto.tags,
  reviews: productDto.reviews,
});

export const mapProductsDtoToProductsUi = (productsDto?: ProductsDto): ProductUi[] => {
  const products: ProductUi[] = productsDto?.products.map(p => mapProductDtoToProductUi(p)) ?? [];

  return products;
};
