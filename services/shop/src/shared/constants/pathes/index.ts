import { shopRoutes } from '@packages/shared/src/routes';

const ROOT = ``;
const PRODUCTS = `products`;
const PRODUCT = `product`;
const CATEGORIES = `categories`;
const CATEGORY = `category`;
const SEARCH = `search`;

export const PATHES = {
  ROOT,
  PRODUCTS,
  PRODUCT,
  CATEGORIES,
  CATEGORY,
  SEARCH,
};

const HOME = `/${shopRoutes.root}/`; // `/${shopRoutes.root}/` - для микрофронта, '/' - без интеграции

export const LINK_PATHES = {
  HOME,
  PRODUCTS: `${HOME}${PRODUCTS}`,
  PRODUCT: `${HOME}${PRODUCT}`,
  CATEGORIES: `${HOME}${CATEGORIES}`,
  CATEGORY: `${HOME}${CATEGORY}`,
  SEARCH: `${HOME}${SEARCH}`,
};
