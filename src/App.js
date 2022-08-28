import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles/css/antd.css";

import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Portfolio />
      </Router>
      <Footer />
    </ApolloProvider>
  );
};
