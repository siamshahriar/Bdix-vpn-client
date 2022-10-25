import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Checkout from "../Pages/Shared/Checkout/Checkout";
import AllPackages from "../Pages/Shared/PackagesContainer/AllPackages";
import PackageDetails from "../Pages/Shared/PackageDeails/PackageDetails";
import PackagesContainer from "../Pages/Shared/PackagesContainer/PackagesContainer";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import Error404 from "../Pages/Error404/Error404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            //This will show all the packages in the home directory by default
            path: "/",
            element: <AllPackages></AllPackages>,
          },
          {
            //This will show the selected catagory packages and the select click will be from the leftSideNav where the category links are
            path: "/packages/:id",
            element: <PackagesContainer></PackagesContainer>,
          },
          {
            //this will show the details of the selected package
            path: "/packagedetails/:id",
            element: <PackageDetails></PackageDetails>,
          },
          {
            //this is will show selected package with check out option
            path: "/checkout/:id",
            element: <Checkout></Checkout>,
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
