import { useQuery } from '@tanstack/react-query';
import { productApi } from '../../modules/products/products';

export const PRODUCTS_QUERY_KEY = 'products';
const staleTime = 1000 * 60 * 15;
const gcTime = 1000 * 60 * 15;

export const useProducts = () =>
  useQuery({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: productApi.getAll,
    staleTime,
    gcTime,
  });

export const useProductById = (id: number | string) =>
  useQuery({
    queryKey: [PRODUCTS_QUERY_KEY, id],
    queryFn: () => productApi.getById(Number(id)),
    enabled: !!id,
  });
