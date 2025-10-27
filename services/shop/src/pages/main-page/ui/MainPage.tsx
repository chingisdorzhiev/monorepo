import { Button, Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { shopPathes } from '~shared/constants';

const { Link } = Typography;

export const MainPage = () => {
  return (
    <div>
      <div>SHOP Main Page</div>
      <Button>Кнопка</Button>
      <div>
        <Link as={RouterLink} to={shopPathes.products}>
          Products
        </Link>
      </div>
    </div>
  );
};
