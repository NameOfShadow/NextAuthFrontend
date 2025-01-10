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
  { path: "/nextauth/login", element: <LoginPage /> },
  { path: "/nextauth/login/success", element: <LoginSuccess /> },
  { path: "/nextauth/login/fail/:message", element: <LoginFail /> },
  { path: "/nextauth/register", element: <RegisterPage /> },
  { path: "/nextauth/register/success", element: <RegisterSuccess /> },
  { path: "/nextauth/register/fail/:message", element: <RegisterFail /> },
]);

const AppRoutes = () => <RouterProvider router={router}/>;

export default AppRoutes;
