import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loadable } from '../../shared/ui';

import { MainPage } from '../../pages/main-page';

// Микрофронты
// @ts-ignore
const ShopPage = Loadable(lazy(() => import('shop/Router')));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/shop/*" element={<ShopPage />} />
      </Routes>
    </Suspense>
  );
};
