import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

const element = screen.queryByText("please pass this test"); // Steal this out of the expect statement and pass it as an argument in the debugger.

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  screen.debug(element);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
