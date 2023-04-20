import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './utils/auth';

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
          {/* Grady changed this route to conditionally serve either main or login, depending on if you're logged in */}
          <Route 
            path="/" 
            element={<TemplatePage page={Auth.loggedIn() ? <Main /> : <Login />} />}
          />
          <Route
            path="/signup"
            element={<TemplatePage page={<SignUp />} />}
          />
          {/* given the above change, the main path can probably be removed */}
          <Route 
            path="/main" 
            element={<TemplatePage page={<Main />} />} 
          />
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
