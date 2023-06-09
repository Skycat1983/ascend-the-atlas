import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Navbar from "./Components/Navbar";
import FlagGame from "./pages/FlagGame";
import Cities from "./currentlyUnused/Cities";
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
            <Route path="flags" element={<FlagGame />} />
            <Route path="cities" element={<Cities />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
