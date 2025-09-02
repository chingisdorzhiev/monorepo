import { BASE_API_URL } from '../constants';

export const productsEndpoints = {
  all: () => `${BASE_API_URL}/products`,
  byId: (id: number) => `${BASE_API_URL}/products/${id}`,
};
