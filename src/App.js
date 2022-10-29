import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
