import { useEffect, useState } from "react";

import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";
import Navigation from "./components/b/Navigation";
import routes from "./router/routes";
import CvPage from "./pages/cv";
import ConsultingPage from "./pages/consulting";
import ContactsPage from "./pages/contacts";
import AboutPage from "./pages/about";
import { ThemeContext } from "./context/themeContext";
import "./styles/index.scss";
import styles from "./App.module.scss";

function App() {
  const { route } = useRoute();
  const { name } = route;
  const testRoute = startsWithSegment(name);
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
      <Navigation activeRoute={route} routes={routes} />
      <main className={styles.container}>
        {testRoute("about") && <AboutPage />}
        {testRoute("cv") && <CvPage />}
        {testRoute("consulting") && <ConsultingPage />}
        {testRoute("contacts") && <ContactsPage />}
      </main>
      {/* <div data-only-print>Версія для друку в розробці</div> */}
    </ThemeContext.Provider>
  );
}

export default App;
