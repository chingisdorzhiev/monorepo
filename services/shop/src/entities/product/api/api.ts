import { httpClient } from '~shared/api';
import { productsEndpoints } from './endpoints';
import type { ProductsDto, ProductDto } from './types';

export const productApi = {
  getAll: () => httpClient.get<ProductsDto>(productsEndpoints.all()),
  getById: (id: number) => httpClient.get<ProductDto>(productsEndpoints.byId(id)),
  getPaginated: (skip: number, limit: number) =>
    httpClient.get<ProductsDto>(`${productsEndpoints.all()}?limit=${limit}&skip=${skip}`),
};
