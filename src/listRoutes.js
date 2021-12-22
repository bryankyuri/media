import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));
const LineUp = lazy(() => import("./Pages/LineUp/index"));
const Schedule = lazy(() => import("./Pages/Schedule/index"));
const Ticket = lazy(() => import("./Pages/Ticket/index"));
const Map = lazy(() => import("./Pages/Map/index"));
const Merch = lazy(() => import("./Pages/Merch/index"));
const BePartOfUs = lazy(() => import("./Pages/BePartOfUs/index"));
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
    path: "/ticket",
    component: Ticket,
  },
  {
    exact: true,
    path: "/line-up",
    component: LineUp,
  },
  {
    exact: true,
    path: "/schedule",
    component: Schedule,
  },
  {
    exact: true,
    path: "/map",
    component: Map,
  },
  {
    exact: true,
    path: "/merch",
    component: Merch,
  },
  {
    exact: true,
    path: "/be-part-of-us",
    component: BePartOfUs,
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
