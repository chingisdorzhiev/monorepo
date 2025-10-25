import { RouterProvider } from './RouterProvider';
import { QueryProvider } from './QueryProvider';

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <QueryProvider>
      <RouterProvider>{children}</RouterProvider>
    </QueryProvider>
  );
};

export default AppProvider;
