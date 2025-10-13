import { Button, Typography } from '@packages/ui-kit';
import { shopRoutes } from '@packages/shared/src/routes/shop';

import styles from './styles.module.css';

const { Link } = Typography;

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Button variant="secondary">Панель</Button>

      <Link href={shopRoutes.main} className={styles.sidebarLink}>
        Магазин
      </Link>
    </aside>
  );
};
