import { queryOptions } from '@tanstack/react-query';
import { categoryApi } from './api';

const CATEGORIES_QUERY_KEY = 'categories';

export const categoryQueries = {
  all: () =>
    queryOptions({
      queryKey: [CATEGORIES_QUERY_KEY],
      queryFn: categoryApi.getAll,
      staleTime: 1000 * 60 * 5,
    }),

  bySlug: (slug: string) =>
    queryOptions({
      queryKey: [CATEGORIES_QUERY_KEY, slug],
      queryFn: () => categoryApi.getProductsByCategory(slug),
      enabled: !!slug,
      staleTime: 1000 * 60 * 5,
    }),
};
