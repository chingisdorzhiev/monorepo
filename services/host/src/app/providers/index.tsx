import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from '../../shared/theme/ThemeProvider';

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <RouterProvider>{children}</RouterProvider>;
    </ThemeProvider>
  );
};

export default AppProvider;
