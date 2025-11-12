import { type ProductUi } from './types';
import type { ProductsDto, ProductDto, ProductRequestDto } from '../api/types';

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

export const mapProductUiToProductRequestDto = (productUi: ProductUi): ProductRequestDto => ({
  id: productUi.id,
  title: productUi.title,
  description: productUi.description,
  category: 'misc', // заглушка — dummyjson требует поле
  price: productUi.price,
  discountPercentage: productUi.discount ?? 0,
  rating: productUi.rating,
  stock: productUi.stock,
  tags: productUi.tags,
  brand: productUi.brand,
  sku: '',
  weight: 0,
  dimensions: { width: 0, height: 0, depth: 0 },
  warrantyInformation: '',
  shippingInformation: '',
  availabilityStatus: 'In Stock',
  reviews: productUi.reviews,
  returnPolicy: '',
  minimumOrderQuantity: 1,
  meta: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    barcode: '',
    qrCode: '',
  },
  thumbnail: productUi.thumbnail,
  images: productUi.images,
});
