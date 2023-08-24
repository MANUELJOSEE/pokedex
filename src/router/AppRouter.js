import React from "react";
import About from "../pages/About";
import Home from "../pages/home";
import Pokedex from "../pages/Pokedex";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex/>} />
      </Routes>
    </>
  );
}
export default AppRouter;
