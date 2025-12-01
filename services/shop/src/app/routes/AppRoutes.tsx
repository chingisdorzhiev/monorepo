import { Route, Routes } from 'react-router-dom';

import { MainPage } from '~pages/main-page';
import { NotFoundPage } from '~pages/not-found';
import { ProductDetailsPage } from '~pages/product-details-page';
import { ProductsListPage } from '~pages/products-list-page';
import { CategoriesPage } from '~pages/categories-page';
import { ProductsByCategoryPage } from '~pages/products-by-category';
import { SearchPage } from '~pages/search-page';

import { PATHES } from '~shared/constants';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path={`${PATHES.ROOT}*`} element={<NotFoundPage />} />
      <Route path={PATHES.PRODUCTS} element={<ProductsListPage />} />
      <Route path={`${PATHES.PRODUCT}/:productId`} element={<ProductDetailsPage />} />
      <Route path={`${PATHES.CATEGORIES}`} element={<CategoriesPage />} />
      <Route path={`${PATHES.CATEGORY}/:category`} element={<ProductsByCategoryPage />} />
      <Route path={PATHES.SEARCH} element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
