import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

// const root = document.getElementById("root");
// const rootContainer = createRoot(root);
// rootContainer.render(<App />);

// if (!root) {
//   throw new Error("root not found");
// };

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
