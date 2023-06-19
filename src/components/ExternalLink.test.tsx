import { render, screen } from "@testing-library/react";
import ExternalLink from "./ExternalLink";

describe("ExternalLink", () => {
  it("renders link with correct href and children", () => {
    const href = "https://example.com";
    const children = "Example Link";

    render(<ExternalLink href={href}>{children}</ExternalLink>);

    const linkElement = screen.getByText(children);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", href);
  });

  it("applies custom class name", () => {
    const customClassName = "custom-link";
    const href = "https://example.com";
    const children = "Example Link";

    render(
      <ExternalLink href={href} customClassName={customClassName}>
        {children}
      </ExternalLink>
    );

    const linkElement = screen.getByText(children);
    expect(linkElement).toHaveClass(customClassName);
  });

  it("opens link in a new tab", () => {
    const href = "https://example.com";
    const children = "Example Link";

    render(<ExternalLink href={href}>{children}</ExternalLink>);

    const linkElement = screen.getByText(children);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
  });
});
