import { type ProductsDto } from '~/shared/api';
import { type ProductUi } from '~/entities/product';

export const mapProductsDtoToProductsUi = (productsDto: ProductsDto): ProductUi[] => {
  const products: ProductUi[] =
    productsDto?.products.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
    })) ?? [];

  return products;
};
