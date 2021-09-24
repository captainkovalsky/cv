import React from "react";
import { useRoute } from "react-router5";
import Navigation from "./components/a/Navigation";
import logo from "./logo.svg";
import routes from "./router/routes";
import "./App.scss";

function App() {
  const { route } = useRoute();

  return (
    <div className="App">
      <Navigation activeRoute={route} routes={routes} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming soon ... {route.name !== "/" && route.name}</p>
      </header>
    </div>
  );
}

export default App;
