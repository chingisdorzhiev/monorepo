import { Route, Routes } from 'react-router-dom';

import { MainPage } from '../../pages/main-page';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
};

export default AppRoutes;
