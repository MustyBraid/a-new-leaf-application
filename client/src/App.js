import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main.jsx";
import TemplatePage from "./components/TemplatePage.jsx";
import Editor from "./components/Editor.jsx";
import SignUp from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import PlantSlideshow from "./components/PlantSlideshow.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import UserSettingsPage from "./components/UserSettingsPage.jsx";
import NewPlantButton from "./components/newPlantButton.jsx";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TemplatePage page={<Login />} />} />
          <Route
            path="/signup"
            element={<TemplatePage page={<SignUp />} />}
          />
          <Route path="/main" element={<TemplatePage page={<Main />} />} />
          <Route
            path="/editplant"
            element={<TemplatePage page={<Editor />} />}
          />
          <Route
            path="/PlantSlideshow"
            element={<TemplatePage page={<PlantSlideshow />} />}
          />
          <Route
            path="/userSettingsPage"
            element={<TemplatePage page={<UserSettingsPage />} />}
          />
          <Route
            path="/construction"
            element={<TemplatePage page={<NewPlantButton />} />}
          />
          <Route
            path="*"
            element={<TemplatePage page={<PageNotFound />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
