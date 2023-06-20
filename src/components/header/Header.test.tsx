import { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/header/Header";

jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;

  MockLink.displayName = "MockLink";

  return MockLink;
});

describe("Header", () => {
  test("renders the header correctly", () => {
    render(<Header />);

    // Verify that the header logo is rendered correctly
    const logoLink = screen.getByText("<Alfirman />").closest("a");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    // Verify that the mobile menu navigation component exists
    const mobileMenuNav = screen.getByTestId("mobile-menu-nav");
    expect(mobileMenuNav).toBeInTheDocument();

    // Verify that the navigation items are rendered correctly
    const homeLink = screen.getByText("home");
    const aboutLink = screen.getByText("about");
    const projectsLink = screen.getByText("projects");
    const blogLink = screen.getByText("blog");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/projects");
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");
  });

  test("navigates to the homepage when the logo is clicked", () => {
    render(<Header />);

    // Simulate clicking the logo
    fireEvent.click(screen.getByText("<Alfirman />"));

    // Verify that the window location pathname is updated to the homepage path ("/")
    expect(window.location.pathname).toBe("/");
  });
});
