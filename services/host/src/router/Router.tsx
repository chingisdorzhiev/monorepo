import { App } from "./../components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import shopRoutes from "shop/Router";
// @ts-ignore
import adminRoutes from "admin/Router";

// const root = document.getElementById("root");
// const rootContainer = createRoot(root);
// rootContainer.render(<App />);

// if (!root) {
//   throw new Error("root not found");
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <div>
      //   <h1>Hello World</h1>
      //   <Link to="about">About Us</Link>
      // </div>
      <App />
    ),
    children: [...shopRoutes, ...adminRoutes],
  },
]);
