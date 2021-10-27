import { FC } from "react";
import { BaseLink, useRoute } from "react-router5";
import ToggleSwitch from "../../a/ToggleSwitch";
import useTheme from "../../../hooks/useTheme";

import styles from "./navigation.module.scss";

const Navigation: FC = () => {
  const { router } = useRoute();
  const { setTheme, theme } = useTheme();
  return (
    <>
      <nav className={styles.root} data-no-print>
        <BaseLink
          router={router}
          routeName={"about"}
          className={styles.item}
          activeClassName={styles.active}
        >
          About
        </BaseLink>
        <BaseLink
          router={router}
          routeName={"cv"}
          className={styles.item}
          activeClassName={styles.active}
        >
          CV
        </BaseLink>
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
      <div className={"sub-route"}>sub route</div>
    </>
  );
};

export default Navigation;
