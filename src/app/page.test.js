import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("home", () => {
  test("should render home page", () => {
    render(<Home />);
    const title = screen.getByText("Hello World");
    const button = screen.getByRole("button", {
      name: /click/i,
    });
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
