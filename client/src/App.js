import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import TemplatePage from "./components/TemplatePage.jsx";
import Editor from "./components/Editor.jsx";
import SignUp from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import PlantSlideshow from "./components/PlantSlideshow.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import UserSettingsPage from "./components/UserSettingsPage.jsx";

// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   console.log(token);
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });



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
            path="*"
            element={<TemplatePage page={<PageNotFound />} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
