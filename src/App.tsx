import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Navbar from "./Components/Navbar";
import Item from "./pages/Item";
import Flags from "./pages/Flags";
import Cities from "./pages/Cities";
import { AuthContextProvider } from "./Contexts/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/start" element={<Start />}>
            <Route path="flags" element={<Flags />} />
            <Route path="cities" element={<Cities />} />
          </Route>
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="item/:id/:name" element={<Item />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

//? from json
// "build": "react-scripts build",
