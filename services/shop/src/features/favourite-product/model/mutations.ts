import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type ProductUi } from '~entities/product';

import { favoriteProductApi } from '../api/api';
import { favoriteQueries } from '../api/queries';

export const useAddToFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoriteProductApi.addToFavorites,

    onMutate: async (newProduct: ProductUi) => {
      await queryClient.cancelQueries({ queryKey: favoriteQueries.list().queryKey });

      const previousFavorites = queryClient.getQueryData(favoriteQueries.list().queryKey) ?? [];

      // оптимистичное обновление
      queryClient.setQueryData(favoriteQueries.list().queryKey, [...previousFavorites, newProduct]);

      return { previousFavorites };
    },

    onError: (_err, _newProduct, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(favoriteQueries.list().queryKey, context.previousFavorites);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueries.list().queryKey });
    },
  });
};

export const useRemoveFromFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoriteProductApi.removeFromFavorites,

    onMutate: async (productId: number) => {
      await queryClient.cancelQueries({ queryKey: favoriteQueries.list().queryKey });

      const previousFavorites = queryClient.getQueryData(favoriteQueries.list().queryKey) ?? [];

      queryClient.setQueryData(
        favoriteQueries.list().queryKey,
        previousFavorites.filter(p => p.id !== productId),
      );

      return { previousFavorites };
    },

    onError: (_err, _productId, context) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(favoriteQueries.list().queryKey, context.previousFavorites);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueries.list().queryKey });
    },
  });
};
