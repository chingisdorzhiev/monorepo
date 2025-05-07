import { App } from "./../components/App";
import { createBrowserRouter } from "react-router-dom";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const routes = [
  {
    path: "/shop",
    element: (
      // <div>
      //   <h1>Hello World</h1>
      //   <Link to="about">About Us</Link>
      // </div>
      <App />
    ),
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback="Loading...">
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback="Loading...">
            <div>secondShop</div>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
];

export const router = createBrowserRouter(routes);
export default routes;
