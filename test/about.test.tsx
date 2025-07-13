import React from "react";
import { About } from "../src/client/pages/About";
import { render } from "@testing-library/react";

describe("About", () => {
  it("Should render author name", () => {
    const { container } = render(<About />);

    expect(container.textContent).toBe("AboutAuthor: Васинович Степан");
  });
});
