import React from "react";
import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";
import Navigation from "./components/a/Navigation";
import routes from "./router/routes";
import CvPage from "./pages/cv";
import ConsultingPage from "./pages/consulting";
import ContactsPage from "./pages/contacts";
import AboutPage from "./pages/about";
import "./App.scss";

function App() {
  const { route } = useRoute();
  const { name } = route;
  const testRoute = startsWithSegment(name);

  return (
    <div className="App">
      <Navigation activeRoute={route} routes={routes} />
      <main className="container">
        {testRoute("cv") && <CvPage />}
        {testRoute("about") && <AboutPage />}
        {testRoute("consulting") && <ConsultingPage />}
        {testRoute("contacts") && <ContactsPage />}
      </main>
    </div>
  );
}

export default App;
