import { createContext } from "react";

export const ThemeContext = createContext<any>({
  theme: "light",
  changeTheme: null,
});
