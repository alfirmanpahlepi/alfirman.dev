import { render, screen } from "@testing-library/react";
import LinksNav from "./LinksNav";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("LinksNav", () => {
  test("renders links with correct active state", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");

    render(<LinksNav />);

    const homeLink = screen.getByText("home");
    const aboutLink = screen.getByText("about");
    const projectsLink = screen.getByText("projects");
    const blogLink = screen.getByText("blog");

    expect(homeLink).toHaveClass("text-neutral-500");
    expect(homeLink).not.toHaveClass("font-bold");

    expect(aboutLink).not.toHaveClass("text-neutral-500");
    expect(aboutLink).toHaveClass("font-bold");

    expect(projectsLink).toHaveClass("text-neutral-500");
    expect(projectsLink).not.toHaveClass("font-bold");

    expect(blogLink).toHaveClass("text-neutral-500");
    expect(blogLink).not.toHaveClass("font-bold");
  });
});
