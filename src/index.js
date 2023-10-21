import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Movies from "./components/Movies";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErroPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
