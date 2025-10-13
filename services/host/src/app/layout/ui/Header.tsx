import { Typography } from '@packages/ui-kit';

import { ThemeSwitcher } from '~shared/ui';

import styles from './styles.module.css';

const { Link } = Typography;

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Monorepo</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/shop">Shop</Link>
      </nav>
      <div className={styles.actions}>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
