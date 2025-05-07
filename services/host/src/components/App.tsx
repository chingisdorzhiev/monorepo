import { useState } from "react";
import { sum } from "@packages/shared";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRutes } from "@packages/shared/src/routes/shop";

export const App = () => {
  const a = sum(1, 2);
  return (
    <div>
      <div>Хостовое приложение</div>
      Host app {a}
      <div>
        <Link to={`${adminRoutes.admin}`}>ABOUT</Link>
        <br />
        <Link to={`${shopRutes.main}`}>SHOP</Link>
        <Outlet />
      </div>
    </div>
  );
};
