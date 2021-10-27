import { useEffect, useState } from "react";
import { useRouteNode } from "react-router5";
import Navigation from "./components/b/Navigation";
import CvPage from "./pages/cv";
import AboutPage from "./pages/about";
import { ThemeContext } from "./context/themeContext";
import "./styles/index.scss";

import styles from "./App.module.scss";

function App() {
  const { route } = useRouteNode("");
  const topRouteName = route.name.split(".")[0];

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
      <div
        id="navigation-portal"
        style={{
          position: "absolute",
        }}
      />
      <Navigation />
      <main className={styles.container}>
        {topRouteName === "about" && <AboutPage />}
        {topRouteName === "cv" && <CvPage />}
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
