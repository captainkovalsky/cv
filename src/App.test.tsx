import { render, screen } from "@testing-library/react";
import { useRouteNode } from "react-router5";
import App from "./App";

jest.mock("./components/b/Navigation", () => () => (
  <div data-testid={"navigation"} />
));
jest.mock("./pages/cv", () => () => <div data-testid={"cv-page"} />);
jest.mock("./pages/about", () => () => <div data-testid={"about-page"} />);

jest.mock("react-router5", () => {
  return {
    ...jest.requireActual("react-router5"),
    useRouteNode: jest.fn(),
  };
});

describe("<App />", () => {
  it("should render navigation", () => {
    (useRouteNode as jest.Mock).mockImplementation(() => ({
      route: { name: "cv.b" },
    }));

    render(<App />);
    expect(screen.getByTestId("navigation")).toBeVisible();
  });

  it("should render cv page", () => {
    (useRouteNode as jest.Mock).mockImplementation(() => ({
      route: { name: "cv.b" },
    }));
    render(<App />);
    expect(screen.getByTestId("cv-page")).toBeVisible();
  });

  it("should render about page", () => {
    (useRouteNode as jest.Mock).mockImplementation(() => ({
      route: { name: "about.b" },
    }));

    render(<App />);
    expect(screen.getByTestId("about-page")).toBeVisible();
  });
});
