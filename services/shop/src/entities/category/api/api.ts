import type { ProductsDto } from '~entities/product/@x/categories';
import { httpClient } from '~shared/api';

import type { CategoryDto } from './types';
import { categoryEndpoints } from './endpoints';

export const categoryApi = {
  getAll: () => httpClient.get<CategoryDto[]>(categoryEndpoints.all()),
  getProductsByCategory: (slug: string) =>
    httpClient.get<ProductsDto>(categoryEndpoints.productsByCategory(slug)),
};
