/** @format */

import React from "react";
// import { CHOOSE_LANG, HOME, LOGIN } from "./routePaths";
export const HOME = '/'
// const Elements = React.lazy(() => import("src/pages/elements/Elements"));

const Home = React.lazy(() => import("src/pages/home/Home"));

// User
const Login = React.lazy(() => import("src/pages/login/Login"));
const ChooseLanguage = React.lazy(() =>
  import("src/pages/login/ChooseLanguage")
);

const routePath = [
//   { path: "/elements", name: "Elements", component: Elements },
  { path: HOME, exact: true, name: "Home", component: Home },
  // User
//   { path: LOGIN, name: "Login", component: Login },
//   { path: CHOOSE_LANG, name: "Choose Language", component: ChooseLanguage },
];

export default routePath;
