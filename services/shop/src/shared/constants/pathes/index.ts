const SHOP_ROOT = '';

export const shopPathes = {
  root: SHOP_ROOT,
  products: `${SHOP_ROOT}/products`,
  productById: (id: number | string) => `${SHOP_ROOT}/product/${id}`,
};
