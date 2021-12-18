import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));
const NotFound = lazy(() => import("./Pages/Notfound/NotFound"));
const Maintenance = lazy(() => import("./Pages/Maintenance"));

export const listRoutes = [
  {
    exact: true,
    path: "/",
    component : Home
  },
  {
    exact: true,
    path: "/notfound",
    component : NotFound
  },
  {
    exact: true,
    path: "/maintenance",
    component : Maintenance
  }
]

