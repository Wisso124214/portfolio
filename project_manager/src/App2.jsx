/* eslint-disable no-unused-vars */
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'
import { routes } from "./subsystems/components/Constants";

//const express = require('express')
//const app = express();
//const PORT = 3005 || process.env.port;

//NO USAR CREATE-BROWSE-ROUTER, IMPORTAR ROUTES Y CON MANEJARLO CON MAP 
export const router = createBrowserRouter(routes)

export default function App(){
  return(
    <>
      {
        createRoot(document.getElementById("root")).render(
          <RouterProvider router={router} />
        )
      }
    </>
  )
}

