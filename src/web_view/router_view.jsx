import { useRoutes, Navigate } from "react-router-dom";
import Home from "./view_page/page/Home";
import AboutUs from "./view_page/page/AboutUs";
import Services from "./view_page/page/Services";
import Blog from "./view_page/page/Blog";
import Contact from "./view_page/page/Contact";

const RouterView = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <div>{element}</div>;
};

export default RouterView;
