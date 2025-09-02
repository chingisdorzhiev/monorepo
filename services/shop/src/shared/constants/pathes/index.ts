const SHOP_ROOT = '/shop';

export const shopPathes = {
  root: SHOP_ROOT,
  products: `${SHOP_ROOT}/products`,
  productById: (id: number | string) => `${SHOP_ROOT}/products/${id}`,
};
