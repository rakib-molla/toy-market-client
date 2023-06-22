import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../Pages/Gallery/Gallery";
import Blogs from "../Pages/Blogs/Blogs";
import AddToy from "../Pages/Toys/AddToy/AddToy";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyToy from "../Pages/Toys/MyToys/Mytoy";
import AllToys from "../Pages/Toys/AllToys/AllToys";
import ToyDetails from "../Pages/Toys/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/Toys/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/gallery',
          element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/addToy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
          loader: ()=>fetch('https://toy-marketplace-server-assignment-11.vercel.app/allToy')
        },
        {
          path: '/myToys',
          element: <PrivateRoute> <MyToy></MyToy> </PrivateRoute> 
        },
        {
          path: '/allToys',
          element:<PrivateRoute> <AllToys></AllToys></PrivateRoute>,
          
        },
        {
          path: '/toyDetails/:id',
          element: <PrivateRoute> <ToyDetails></ToyDetails></PrivateRoute> ,
          loader: ({params})=>fetch(`https://toy-marketplace-server-assignment-11.vercel.app/toyDetails/${params.id}`)
          
        },
        {
          path: '/update/:id',
          element:<PrivateRoute> <UpdateToy></UpdateToy> </PrivateRoute> 
        }
      ],
    },
    
  ]);

export default router;