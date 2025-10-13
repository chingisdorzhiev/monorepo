import { Sidebar } from './Sidebar';

import styles from './styles.module.css';

export const MainPage: React.FC = () => {
  return (
    <div className={styles.mainPageContainer}>
      <Sidebar />
      <section className={styles.content}>
        <h1>Главная страница</h1>
        <p>Добро пожаловать!</p>
      </section>
    </div>
  );
};
