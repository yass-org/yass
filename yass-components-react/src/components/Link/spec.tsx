import { render, screen } from "@testing-library/react";
import Link from "./index";

describe("<Link>", () => {
  it("renders children as text content", () => {
    const content = "some content";
    render(<Link href="#">{content}</Link>);

    expect(screen.getByText(content)).toBeDefined();
  });

  // it("renders correct href", () => {
  //   const content = "some content";
  //   render(<Link href="#">{content}</Link>);

  // expect(screen.getByAttribute("href")).toBe("#");
  // });
});
