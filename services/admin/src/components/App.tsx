import { useState } from "react";
import { sum } from "@packages/shared";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const a = sum(1, 2);
  return (
    <div>
      Host app {a}
      <div>
        <div>ABOUT</div>
        <Outlet />
      </div>
    </div>
  );
};
