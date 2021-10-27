const routes = [
  { name: "about", path: "/about" },
  {
    name: "cv",
    path: "/cv",
    children: [
      { name: "all", path: "/" },
      { name: "skills", path: "/skills" },
      { name: "faq", path: "/faq" },
    ],
  },
];

export const defaultRoute = "about";

export default routes;
