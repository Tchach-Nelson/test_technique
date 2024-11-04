import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import List from './page/list';
import Create from './page/Create';

function App() {

    const router = createBrowserRouter([
        {
        path: "/",
        element: <List />,
        },
        {
        path: "/create",
        element: <Create />
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
