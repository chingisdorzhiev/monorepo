import { Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { LINK_PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Link } = Typography;

export const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      shop 404 - страница не найдена
      <Link as={RouterLink} to={LINK_PATHES.HOME}>
        To Home Page
      </Link>
    </div>
  );
};
