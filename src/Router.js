import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";

import './global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />
  }
]);

function Router() {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default Router;
