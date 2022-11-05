import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import Editor from "./components/Editor.jsx";
import SignUp from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import PlantSlideshow from "./components/PlantSlideshow.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import UserSettingsPage from "./components/UserSettingsPage.jsx";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/main" element={<Main />} />
            <Route path="/editplant" element={<Editor />} />
            <Route path="/PlantSlideshow" element={<PlantSlideshow />} />
            <Route path="/userSettingsPage" element={<UserSettingsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
