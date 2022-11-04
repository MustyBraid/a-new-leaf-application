import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PlantSlideshow from "./components/PlantSlideshow";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editplant" element={<Editor />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PlantSlideshow" element={<PlantSlideshow />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
