import { Link, Outlet } from 'react-router-dom';

import { sum } from '@packages/shared';

import { shopRoutes } from '@packages/shared/src/routes/shop';

export const MainPage = () => {
  console.log('exampleanother');
  const a = sum(1, 2);
  return (
    <div>
      <div>Хостовое приложение</div>
      Host app {a}
      <div>
        <Link to={`${shopRoutes.main}`}>SHOP</Link>
        <Outlet />
      </div>
    </div>
  );
};
