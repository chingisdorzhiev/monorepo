import { queryOptions } from '@tanstack/react-query';

import { favoriteProductApi } from './api';

const FAVORITES_KEY = 'favorites';

export const favoriteQueries = {
  all: () => [FAVORITES_KEY] as const,

  list: () =>
    queryOptions({
      queryKey: favoriteQueries.all(),
      queryFn: favoriteProductApi.getAll,
      staleTime: 0,
    }),
};
