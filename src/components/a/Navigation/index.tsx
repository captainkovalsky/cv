import React from "react";
import { State } from "router5";
import { Link } from "react-router5";
import { RouteDefinition } from "../../../router";
import styles from "./navigation.module.scss";

type NavigationProps = {
  activeRoute: State;
  routes: RouteDefinition[];
};

const Navigation: React.FC<NavigationProps> = ({ activeRoute, routes }) => {
  return (
    <nav className={styles.root}>
      {routes
        .filter((r) => r.visible !== false)
        .map((r: RouteDefinition): JSX.Element => {
          return (
            <Link
              routeName={r.name}
              className={styles.item}
              activeClassName={styles.active}
            >
              {r.name}
            </Link>
          );
        })}
    </nav>
  );
};

export default Navigation;
