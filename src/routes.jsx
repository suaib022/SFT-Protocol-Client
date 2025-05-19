import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import ErrorElement from "./components/element/ErrorElement";
import Task from "./pages/Task";
import Withdraw from "./pages/Withdraw";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks",
        element: <Task />,
      },
      {
        path: "withdraw",
        element: <Withdraw />,
      },
    ],
  },
]);

export default MainRoutes;
