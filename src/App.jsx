import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Movies from "./pages/Movies"
import Series from "./pages/Series";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
