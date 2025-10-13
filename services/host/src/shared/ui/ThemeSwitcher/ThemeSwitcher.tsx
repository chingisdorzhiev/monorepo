import { FC } from 'react';
import { Switch } from '@packages/ui-kit';

import { useTheme } from '~shared/theme';

import styles from './styles.module.css';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.switcher}>
      <Switch onChange={toggleTheme} />
      Theme: {theme}
    </div>
  );
};
