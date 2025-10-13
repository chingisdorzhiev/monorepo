import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import styles from './styles.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
