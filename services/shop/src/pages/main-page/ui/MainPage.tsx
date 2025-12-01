import { Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { SearchProducts } from '~/features/search-products';

import { PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Link, Title } = Typography;

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Title level={1}>SHOP Main Page</Title>
      <SearchProducts />
      <div className={styles.navMenu}>
        <Link as={RouterLink} to={PATHES.PRODUCTS}>
          Products
        </Link>
        <Link as={RouterLink} to={PATHES.CATEGORIES}>
          Categories
        </Link>
      </div>
    </div>
  );
};
