import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from '~pages/main-page';
import { NotFoundPage } from '~pages/not-found';

import { ProductDetailsPage } from '~pages/product-details-page';

import { shopPathes } from '~shared/constants';

const ProductsListPage = lazy(() => import('../../pages/products-list-page'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path={`${shopPathes.root}*`} element={<NotFoundPage />} />
      <Route path={shopPathes.products} element={<ProductsListPage />} />
      <Route path={`${shopPathes.productById}/:productId`} element={<ProductDetailsPage />} />
    </Routes>
  );
};

export default AppRoutes;
