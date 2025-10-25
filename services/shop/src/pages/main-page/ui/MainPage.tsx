import { Button, Typography } from '@packages/ui-kit';

import { shopPathes } from '~shared/constants';

const { Link } = Typography;

export const MainPage = () => {
  return (
    <div>
      <div>SHOP Main Page</div>
      <Button>Кнопка</Button>
      <div>
        <Link href={shopPathes.products}>Products</Link>
      </div>
    </div>
  );
};
