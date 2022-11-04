import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import PlantSlideshow from "./components/PlantSlideshow";
import PageNotFound from "./components/PageNotFound";
import UserSettingsPage from "./components/UserSettingsPage";

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
            <Route path="/" element={<Main />} />
            <Route path="/editUser" element={<UserSettingsPage />} />
            <Route path="/editplant" element={<Editor />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/PlantSlideshow" element={<PlantSlideshow />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
