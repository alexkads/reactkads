import React from "react";
import { render, screen } from "@testing-library/react";
import { InputText } from ".";

test("should render with default values", () => {
  render(<InputText type="email" />);
});
