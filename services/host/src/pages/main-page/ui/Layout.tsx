import { Link, Outlet } from 'react-router-dom';

import { shopRoutes } from '@packages/shared/src/routes/shop';

import styles from './styles.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Link to={'/'}>Home</Link>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          {/* <nav>
            <Link to={shopRoutes.main}>shop</Link>
          </nav> */}
          <Link to={shopRoutes.main}>shop</Link>
        </div>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>© 2025 Monorepo</span>
      </footer>
    </div>
  );
};
