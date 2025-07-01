import AppProvider from './providers';
import { AppRoutes } from './routes';

import './global.css';

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
