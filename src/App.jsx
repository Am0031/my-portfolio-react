import { HashRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";
import "./App.css";
import { Portfolio } from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const theme = {
  token: {
    colorPrimary: "#531dab",
    colorLink: "#531dab",
    colorLinkHover: "#7c3aed",
  },
};

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <ConfigProvider theme={theme}>
        <Router>
          <Navbar />
          <Portfolio />
        </Router>
        <Footer />
      </ConfigProvider>
    </ApolloProvider>
  );
};
