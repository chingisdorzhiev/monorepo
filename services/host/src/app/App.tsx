import AppProvider from './providers';
import { AppRoutes } from './routes';

import './App.module.css';

export const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
