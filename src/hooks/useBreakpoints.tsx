import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const BREAKPOINTS = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
} as any;

export const useBreakpoints = () => {
  const [screen, setScreen] = useState("md");

  const keys = useMemo(() => Object.keys(BREAKPOINTS), [BREAKPOINTS]);

  const lessThan = useCallback(
    (breakpoint: string): boolean => {
      const breakpointIndex = keys.findIndex((k) => k === breakpoint);
      const screenIndex = keys.findIndex((k) => k === screen);
      return screenIndex < breakpointIndex;
    },
    [screen]
  );

  const mediaQueries: MediaQueryList[] = useMemo(
    () =>
      keys.map((size: string) => {
        const media = window.matchMedia(`(min-width: ${BREAKPOINTS[size]})`);
        (media as any).type = size;
        return media;
      }),
    [keys]
  );

  useEffect(() => {
    const onChange = (e: MediaQueryListEvent) => {
      setScreen((e.target as any).type);
    };

    mediaQueries.forEach((q) => {
      q.addEventListener("change", onChange);
    });
    return () => {
      mediaQueries.forEach((q) => q.removeEventListener("change", onChange));
    };
  });

  return {
    screen,
    lessThan,
  };
};
