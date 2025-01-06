import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "../auth/login/LoginPage";
import LoginSuccess from "../auth/login/LoginSuccess";
import LoginFail from "../auth/login/LoginFail";
import RegisterPage from "../auth/register/RegisterPage";
import RegisterSuccess from "../auth/register/RegisterSuccess";
import RegisterFail from "../auth/register/RegisterFail";

const router = createBrowserRouter([
    { path: "/*", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/login/success", element: <LoginSuccess /> },
  { path: "/login/fail", element: <LoginFail /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/register/success", element: <RegisterSuccess /> },
  { path: "/register/fail", element: <RegisterFail /> },
]);

const AppRoutes = () => <RouterProvider router={router}/>;

export default AppRoutes;
