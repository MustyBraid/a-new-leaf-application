import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Signup from "./components/Signup";
import PageNotFound from "./components/404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/editPlant" element={<Editor />} />
        <Route path="/signIn" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
