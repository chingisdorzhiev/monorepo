import { ErrorBoundary } from 'react-error-boundary';

import AppProvider from './providers';
import { AppRoutes } from './routes';
import { ErrorMessage } from '@packages/ui-kit';

import '@packages/shared/src/styles/base.css';
import '@packages/shared/src/styles/theme.css'; // базовые токены

export const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorMessage text="Что-то пошло не так 😢" />}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ErrorBoundary>
  );
};
