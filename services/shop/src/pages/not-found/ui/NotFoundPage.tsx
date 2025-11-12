import { Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Link } = Typography;

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      404 - страница не найдена
      <Link as={RouterLink} to={PATHES.ROOT}>
        To Home Page
      </Link>
    </div>
  );
};
