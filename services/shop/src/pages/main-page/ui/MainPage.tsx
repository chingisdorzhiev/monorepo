import { hostRoutes } from '@packages/shared/src/routes';
import { Link } from 'react-router-dom';

import { shopPathes } from '~shared/constants';

export const MainPage = () => {
  return (
    <div>
      <div>SHOP Main Page</div>
      <div>
        <Link to={hostRoutes.home}>Home</Link>
      </div>
      <div>
        <Link to={shopPathes.products}>Products</Link>
      </div>
    </div>
  );
};
