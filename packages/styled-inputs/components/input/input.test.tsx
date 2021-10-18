import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from ".";

test("should render with default values", () => {
  render(<Input type="email" />);
});
