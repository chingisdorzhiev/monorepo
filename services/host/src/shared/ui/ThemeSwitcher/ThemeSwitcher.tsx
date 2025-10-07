import { FC } from 'react';
import { Switch } from '@packages/ui-kit';

import { useTheme } from '~shared/theme';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Switch onChange={toggleTheme} />
      Theme: {theme}
    </>
  );
};
