import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetails from "./pages/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data.json"),
      },
      {
        path: "apps",
        Component: Apps,
        loader: () => fetch("/data.json"),
      },
      {
        path: "apps/app-details/:id",
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
