import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import GetStart from "./GetStart"
import About from "./About"
import Facebook from "./Pages/Facebook"
import Instagram from './Pages/Instagram';
import LinkedIn from './Pages/LinkedIn';
import GitHub from "./Pages/GitHub"
import Twitter from './Pages/Twitter';
import Protfolio from "./Pages/Protfolio"

// router define
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <About />, 
  children: [
      {
        path: "/facebook",
        element: <Facebook />,  
      },
      {
        path: "/instagram",
        element: <Instagram />, 
      },
       {
        path: "/linkedIn",
        element: <LinkedIn />, 
      },
       {
        path: "/gitHub",
        element: <GitHub />, 
      },
       {
        path: "/twitter",
        element: <Twitter />, 
      },
       {
        path: "/protfolio",
        element: <Protfolio />, 
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)