import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";
import Navigation from "./components/a/Navigation";
import routes from "./router/routes";
import CvPage from "./pages/cv";
import ConsultingPage from "./pages/consulting";
import ContactsPage from "./pages/contacts";
import AboutPage from "./pages/about";
// import "./styles/normalize.css";
import "./styles/index.scss";
import styles from "./App.module.scss";

function App() {
  const { route } = useRoute();
  const { name } = route;
  const testRoute = startsWithSegment(name);
  return (
    <>
      <Navigation activeRoute={route} routes={routes} />
      <main className={styles.flex}>
        <div className={styles.mainContainer}>
          {testRoute("cv") && <CvPage />}
          {testRoute("about") && <AboutPage />}
          {testRoute("consulting") && <ConsultingPage />}
          {testRoute("contacts") && <ContactsPage />}
        </div>
      </main>
    </>
  );
}

export default App;
