import { RouteObject } from "react-router-dom";
import FullstackPage from "./pages/Fullstack";
import BackendPage from "./pages/backend";
import FrontendPage from "./pages/frontend";

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
