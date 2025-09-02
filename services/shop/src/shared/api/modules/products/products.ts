import { httpClient } from '../../config';
import { productsEndpoints } from '../../endpoints';

import type { ProductsDto, ProductDto } from './types';

export const productApi = {
  getAll: () => httpClient.get<ProductsDto>(productsEndpoints.all()),
  getById: (id: number) => httpClient.get<ProductDto>(productsEndpoints.byId(id)),
  // ...
};
