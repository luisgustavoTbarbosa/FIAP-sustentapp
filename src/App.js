import React from 'react';
//import Main from './components/Main';
//import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Perfil from "./pages/Perfil"
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    //<Main />
    <BrowserRouter>
      <Sidebar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}