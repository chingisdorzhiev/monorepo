import AppProvider from './providers';
import { AppRoutes } from './routes';

import '@packages/shared/src/styles/base.css';
import '@packages/shared/src/styles/theme.css'; // базовые токены
import './global.css';

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
