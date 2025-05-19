import { useState } from 'react';
import { sum } from '@packages/shared';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const a = sum(1, 2);
  return (
    <div>
      <div>ADMIN</div>
      <Outlet />
    </div>
  );
};
