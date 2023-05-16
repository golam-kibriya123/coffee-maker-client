import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import UpdateCoffee from './Components/updateCoffee';
import AddCoffee from './Components/AddCoffee';

const router = createBrowserRouter([

  {
    path: "/",
    element:<AddCoffee></AddCoffee>

  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
