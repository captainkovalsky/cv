import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Navigation from "./components/b/Navigation";
import CvPage from "./pages/cv";
import AboutPage from "./pages/about";
import { ThemeContext } from "./context/themeContext";
import "./styles/index.scss";

import styles from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") ?? "dark"
  );

  useEffect(() => {
    document.body.classList.add(`${theme}-theme`);
    return () => {
      document.body.classList.remove("dark-theme", "light-theme");
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: (newTheme: string) => {
          setTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        },
      }}
    >
      <Router>
        <div
          id="navigation-portal"
          style={{
            position: "absolute",
          }}
        />
        <Navigation />
        <main className={styles.container}>
          <Switch>
            <Route path="/cv">
              <CvPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>

            <Route path="*">
              <Redirect to={"/about"} />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
