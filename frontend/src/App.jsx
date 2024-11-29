


import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Agents from "./Pages/Agents";
import ListPage from "./Pages/listPage/ListPage";
import SinglePage from "./Pages/singlePage/SinglePage";
import ProfilePage from "./Pages/profilePage/ProfilePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Update from "./Pages/profilePage/Update";
import NewPostPage from "./Pages/NewPostPage";
import {  listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loader";
import Footer from "./Components/Footer";

// Layout Component with Outlet for rendering children
const Layout = () => (
  <>
    <Navbar />
    {/* The Outlet will render the current route's element */}
    <div className="content">
      <Outlet />
    </div>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps the routes with Navbar and content
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/list", element: <ListPage />, loader:listPageLoader},
      {
        path: "/:id",
        element: <SinglePage />,
        loader: singlePageLoader,
      },
      { path: "/profile", element: <ProfilePage />,loader:profilePageLoader },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/profile/update", element: <Update /> },
      { path: "/profile/newPost", element: <NewPostPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
