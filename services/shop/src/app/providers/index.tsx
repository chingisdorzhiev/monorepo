import { RouterProvider } from './RouterProvider';

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  return <RouterProvider>{children}</RouterProvider>;
};

export default AppProvider;
