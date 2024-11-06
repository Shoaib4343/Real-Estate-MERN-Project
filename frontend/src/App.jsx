// import React from "react";
// import Navbar from "./Components/navbar/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/home/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import Agents from "./Pages/Agents";
// import ListPage from "./Pages/listPage/ListPage";
// import "./App.css"
// import SinglePage from "./Pages/singlePage/SinglePage";
// import ProfilePage from "./Pages/profilePage/ProfilePage";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Update from "./Pages/profilePage/Update";
// import NewPostPage from "./Pages/NewPostPage";
// import { singlePageLoader } from "./lib/singlePageLoader";

// const App = () => {
//   return (
//     // <div>

//     <div>
//       <BrowserRouter>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/agents" element={<Agents />} />
//           <Route path="/list" element={<ListPage />} />
//           <Route path="/:id" element={<SinglePage />} loader={singlePageLoader} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile/update" element={<Update />} />
//           <Route path="/profile/newPost" element={<NewPostPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


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
import {  listPageLoader, singlePageLoader } from "./lib/loader";

// Layout Component with Outlet for rendering children
const Layout = () => (
  <>
    <Navbar />
    {/* The Outlet will render the current route's element */}
    <div className="content">
      <Outlet />
    </div>
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
      { path: "/agents", element: <Agents /> },
      { path: "/list", element: <ListPage />, loader:listPageLoader},
      {
        path: "/:id",
        element: <SinglePage />,
        loader: singlePageLoader,
      },
      { path: "/profile", element: <ProfilePage /> },
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
