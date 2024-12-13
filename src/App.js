import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home.jsx";
import About from "./views/pages/About.jsx";
import Skills from "./views/pages/Skills.jsx";
import Experience from "./views/pages/Experience.jsx";
import Contact from "./views/pages/Contact.jsx";
import Layout from "./views/pages/Layout.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
