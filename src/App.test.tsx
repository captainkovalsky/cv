jest.mock("./pages/cv", () => () => <div data-testid={"cv-page"} />);
jest.mock("./pages/about", () => () => <div data-testid={"about-page"} />);

describe("<App />", () => {
  it("should pass", () => {
    expect(true).toBeTruthy();
  });
});
