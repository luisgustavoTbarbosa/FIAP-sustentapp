import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil"
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    //<Main />
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}