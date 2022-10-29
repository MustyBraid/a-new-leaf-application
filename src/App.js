import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { Routes, Route} from 'react-router';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>

      </Routes>
      <Footer />

    </div>
  );
}

export default App;