import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { hostRoutes, shopRoutes } from '@packages/shared/src/routes';

import { MainPage } from '~pages/main-page';
import { NotFoundPage } from '~pages/not-found';

import { Loadable } from '~shared/ui';

import { Layout } from '../layout';

// Микрофронты
// @ts-ignore
const ShopPage = Loadable(lazy(() => import('shop/Router')));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={hostRoutes.home} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={hostRoutes.notFound} element={<NotFoundPage />} />
        <Route path={shopRoutes.root} element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
