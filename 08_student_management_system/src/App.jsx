import React from "react";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Student from "./components/student";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Student/>
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
