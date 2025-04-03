import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name correctly", () => {
  render(<App />);
  const nameElement = screen.getByText(/Johnson Corpus/i);
  expect(nameElement).toBeInTheDocument();
});
