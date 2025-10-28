import { Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { shopPathes } from '~shared/constants';

import styles from './styles.module.css';

const { Link } = Typography;

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      404 - страница не найдена
      <Link as={RouterLink} to={shopPathes.root}>
        To Home Page
      </Link>
    </div>
  );
};
