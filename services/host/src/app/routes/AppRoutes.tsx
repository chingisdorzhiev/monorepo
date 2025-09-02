import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { hostRoutes, shopRoutes } from '@packages/shared/src/routes';

import { Loadable } from '~/shared/ui';
import { MainPage } from '~/pages/main-page';
import { NotFoundPage } from '~/pages/not-found';

// Микрофронты
// @ts-ignore
// const ShopPage = Loadable(lazy(() => import('shop/Router')));
const ShopPage = lazy(() => import('shop/Router'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={hostRoutes.home}>
        <Route index element={<MainPage />} />
        <Route path={hostRoutes.notFound} element={<NotFoundPage />} />
        <Route path={shopRoutes.main} element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
