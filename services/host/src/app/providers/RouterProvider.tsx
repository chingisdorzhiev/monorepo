import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export const RouterProvider: React.FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
