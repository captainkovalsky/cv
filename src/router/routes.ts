const routes = [
  { name: "about", path: "/about" },
  // { name: "consulting", path: "/consulting" },
  {
    name: "cv",
    path: "/cv",
    children: [
      { name: "all", path: "/" },
      { name: "skills", path: "/skills" },
      { name: "faq", path: "/faq" },
    ],
  },
  // { name: "contacts", path: "/contacts" },
];

export const defaultRoute = "about";

export default routes;
