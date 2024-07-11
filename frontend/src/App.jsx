import React from "react";
import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Agents from "./Pages/Agents";
import ListPage from "./Pages/listPage/ListPage";
import "./App.css"

const App = () => {
  return (
    // <div>

    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;