import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from '~/pages/main-page';
import { shopPathes } from '~/shared/constants';

const ProductsPage = lazy(() => import('../../pages/products-page'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route element={<ProductsPage />} path={shopPathes.products} />
    </Routes>
  );
};

export default AppRoutes;
