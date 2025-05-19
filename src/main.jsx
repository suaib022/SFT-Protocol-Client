import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black min-h-screen min-w-max">
    <React.StrictMode>
      <RouterProvider router={MainRoutes}></RouterProvider>
    </React.StrictMode>
  </div>
);
