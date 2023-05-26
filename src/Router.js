import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/Main";
import './global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
