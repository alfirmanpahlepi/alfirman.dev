import { render, screen } from "@testing-library/react";
import LinksMenuNav from "./LinksMenuNav";
import { ReactNode } from "react";

jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("LinksMenuNav", () => {
  test("renders menu links with correct attributes", () => {
    jest.mock("next/router", () => ({
      useRouter: () => ({
        pathname: "/",
      }),
    }));

    render(<LinksMenuNav />);

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const projectsLink = screen.getByText("Projects");
    const blogLink = screen.getByText("Blog");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(blogLink).toHaveAttribute("href", "/blog");
  });
});
