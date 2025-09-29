import { hostRoutes } from '@packages/shared/src/routes';
import { Link } from 'react-router-dom';
import { Button } from '@packages/ui-kit';

import { shopPathes } from '~shared/constants';

export const MainPage = () => {
  return (
    <div>
      <div>SHOP Main Page</div>
      <Button>Кнопка</Button>

      <div>
        <Link to={hostRoutes.home}>Home</Link>
      </div>
      <div>
        <Link to={shopPathes.products}>Products</Link>
      </div>
    </div>
  );
};
