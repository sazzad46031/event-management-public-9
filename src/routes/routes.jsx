import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import WeddingVenues from "../Pages/WeddingVenues/WeddingVenues";
import Inspiration from "../Pages/Inspiration/Inspiration";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: ()=> fetch('/data.json')
        },
        {
            path: "/weddingvenues",
            element: <WeddingVenues></WeddingVenues>
        },
        {
            path: "/inspiration",
            element: <Inspiration></Inspiration>
        },
        {
            path: "/service/:id",
            element: <ServiceDetail></ServiceDetail>,
            loader: ()=> fetch('/data.json')

        },
        {
            path: "/login",
            element : <Login></Login>
        },
        {
            path : "/register",
            element : <Register></Register>
        }
      ]
    },
  ]);
export default router;
