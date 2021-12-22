import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));
const LineUp = lazy(() => import("./Pages/LineUp/index"));
const NotFound = lazy(() => import("./Pages/Notfound/NotFound"));
const Maintenance = lazy(() => import("./Pages/Maintenance"));

export const listRoutes = () => [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/line-up",
    component: LineUp,
  },
  {
    exact: true,
    path: "/notfound",
    component: NotFound,
  },
  {
    exact: true,
    path: "/maintenance",
    component: Maintenance,
  },
];
