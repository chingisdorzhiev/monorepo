import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from '~pages/main-page';
import { shopPathes } from '~shared/constants';

const ProductsListPage = lazy(() => import('../../pages/products-list-page'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route element={<ProductsListPage />} path={shopPathes.products} />
    </Routes>
  );
};

export default AppRoutes;
