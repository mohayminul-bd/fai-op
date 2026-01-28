import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Home/Home";
import CallLogs from "../pages/CallLogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/call",
        Component: CallLogs,
      },
    ],
  },
]);
