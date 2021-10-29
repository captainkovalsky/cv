import { FC } from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../../a/ToggleSwitch";
import useTheme from "../../../hooks/useTheme";

import styles from "./navigation.module.scss";

const Navigation: FC = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <nav className={styles.root} data-no-print>
        <NavLink
          to={"/about"}
          activeClassName={styles.active}
          className={styles.item}
        >
          About
        </NavLink>
        <NavLink
          to={"/cv"}
          activeClassName={styles.active}
          className={styles.item}
        >
          CV
        </NavLink>
        <div
          style={{
            position: "absolute",
            right: "1rem",
            top: "0.75rem",
          }}
        >
          <ToggleSwitch
            rounded={true}
            value={theme === "dark"}
            onContent={() => <span>🌜</span>}
            offContent={() => <span>🌞</span>}
            onChange={(checked) => {
              if (checked) {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
