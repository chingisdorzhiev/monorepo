const PRODUCT_URL = 'products';

export const productsEndpoints = {
  all: () => PRODUCT_URL,
  byId: (id: number) => `${PRODUCT_URL}/${id}`,
  list: (page: number, limit: number) => `${PRODUCT_URL}?limit=${limit}&skip=${page * limit}`,
};
