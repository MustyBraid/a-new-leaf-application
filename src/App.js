import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Signup from "./components/Signup";
import PageNotFound from "./components/404";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editplant" element={<Editor />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
