import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PopUpPage from "./components/PopUpPage";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editplant" element={<Editor />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PopUpPage" element={<PopUpPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
