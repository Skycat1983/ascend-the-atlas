import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Navbar from "./Components/Navbar";
import Item from "./pages/Item";
import Sort from "./pages/Sort";
import Rank from "./pages/Rank";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/start" element={<Start />}>
          <Route path="sort" element={<Sort />} />
          <Route path="rank" element={<Rank />} />
        </Route>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="item/:id/:name" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
