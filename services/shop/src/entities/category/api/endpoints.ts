export const categoryEndpoints = {
  all: () => 'products/categories',
  productsByCategory: (slug: string) => `products/category/${slug}`,
};
