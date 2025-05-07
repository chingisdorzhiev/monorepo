import { App } from "./../components/App";
import { createBrowserRouter } from "react-router-dom";
import { About } from "@/pages/about";
import { Suspense } from "react";

const routes = [
  {
    path: "/admin",
    element: (
      // <div>
      //   <h1>Hello World</h1>
      //   <Link to="about">About Us</Link>
      // </div>
      <App />
    ),
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      // {
      //   path: "/about/secondAdmin",
      //   element: (
      //     <Suspense fallback="Loading...">
      //       <div>secondAdmin</div>
      //     </Suspense>
      //   ),
      // },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
];

export const router = createBrowserRouter(routes);
export default routes;
