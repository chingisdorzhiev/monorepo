import { queryOptions, infiniteQueryOptions } from '@tanstack/react-query';

import { mapProductsDtoToProductsUi, mapProductDtoToProductUi } from '../model/mappers';
import { productApi } from './api';

const PRODUCTS_QUERY_KEY = 'products';

export const productQueries = {
  all: () => [PRODUCTS_QUERY_KEY] as const,

  // продукт по id
  detail: (id: number) =>
    queryOptions({
      queryKey: [...productQueries.all(), id],
      queryFn: () => productApi.getById(id),
      enabled: !!id,
      select: mapProductDtoToProductUi,
    }),

  // список всех продуктов
  list: () =>
    queryOptions({
      queryKey: productQueries.all(),
      queryFn: productApi.getAll,
      select: mapProductsDtoToProductsUi,
    }),

  // список продуктов с пагинацией
  listInfinite: (limit: number) =>
    infiniteQueryOptions({
      queryKey: [...productQueries.all(), 'infinite', limit] as const,
      queryFn: async ({ pageParam = 0 }) => productApi.getPaginated(pageParam, limit),
      initialPageParam: 0,
      getNextPageParam: lastPage => {
        const nextSkip = lastPage.skip + lastPage.limit;
        return nextSkip < lastPage.total ? nextSkip : undefined;
      },
    }),
};
