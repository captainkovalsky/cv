import { FC } from "react";
import { State } from "router5";
import { Link } from "react-router5";
import { RouteDefinition } from "../../../router";
import ToggleSwitch from "../../a/ToggleSwitch";
import useTheme from "../../../hooks/useTheme";

import styles from "./navigation.module.scss";

type NavigationProps = {
  activeRoute: State;
  routes: RouteDefinition[];
};

const Navigation: FC<NavigationProps> = ({ activeRoute, routes }) => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className={styles.root} data-no-print>
      {routes
        .filter((r) => r.visible !== false)
        .map((r: RouteDefinition): JSX.Element => {
          return (
            <Link
              key={r.name}
              routeName={r.name}
              className={styles.item}
              activeClassName={styles.active}
            >
              {r.name}
            </Link>
          );
        })}
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
  );
};

export default Navigation;
