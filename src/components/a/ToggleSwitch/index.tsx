import { cloneElement, useEffect, useRef, useState } from "react";
import cls from "classnames";
import styles from "./switch.module.scss";

type ToggleSwitchProps = {
  rounded?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
  onContent: any;
  offContent: any;
};
export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(props.value ?? false);
  const [, rerender] = useState(false);

  useEffect(() => {
    if (ref.current && props.value) {
      (ref.current as any).checked = props.value;
    }
    setTimeout(() => {
      rerender(true);
    }, 500);
  }, [props.value]);

  return (
    <label
      className={cls(styles.root, {
        [styles.visible]: !!ref.current,
      })}
      onChange={(e: any) => {
        const value = !!e.target.checked;
        if (props.onChange) {
          props.onChange(value);
        }
        setOn(value);
      }}
    >
      <input type="checkbox" ref={(inputRef) => (ref.current = inputRef)} />
      <span
        className={cls(styles.slider, {
          [styles.round]: props.rounded,
        })}
      ></span>
      {props.onContent &&
        cloneElement(props.onContent(), {
          className: cls(styles.external__on, {
            [styles.visible]: on,
          }),
        })}
      {props.offContent &&
        cloneElement(props.offContent(), {
          className: cls(styles.external__off, {
            [styles.visible]: !on,
          }),
        })}
    </label>
  );
};

export default ToggleSwitch;
