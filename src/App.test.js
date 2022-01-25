import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App component", () => {
  test("should be translated", () => {
    render(<App />);
    expect(
      screen.getByText("Welcome to React and react-i18next")
    ).not.toBeNull();
  });
});
