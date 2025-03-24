import { RouteObject } from "react-router-dom";
import BackendPage from "./pages/backend";
import FrontendPage from "./pages/frontend";
import FullstackPage from "./pages/fullstack";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: FullstackPage,
  },
  {
    path: "/frontend",
    Component: FrontendPage,
  },
  {
    path: "/backend",
    Component: BackendPage,
  },
];

export default routes;
