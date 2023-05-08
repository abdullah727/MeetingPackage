import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders Channel manager heading", () => {
  render(<App />);
  const heading = screen.getByText(/Channel manager/i);
  expect(heading).toBeInTheDocument();
});

test("selects Hotel B from the dropdown", () => {
  render(<App />);
  const dropdown = screen.getByTestId("dropdown");
  expect(dropdown).toBeInTheDocument();
  fireEvent.click(dropdown);
  const hotelBtn = screen.getByText(/Hotel B/i);
  fireEvent.click(hotelBtn);
  expect(screen.getByLabelText(/Hotel B/i)).toBeInTheDocument();
});
