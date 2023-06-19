import { render, screen } from "@testing-library/react";
import CurrentFavTech from "./CurrentFavTech";

describe("CurrentFavTech component", () => {
  it("renders the favorite tech stack icons", () => {
    const icons = ["typescript", "react", "next", "tailwindcss", "node"];
    render(<CurrentFavTech icons={icons} />);

    icons.forEach((icon) => {
      const iconElement = screen.getByTestId(`icon-${icon}`);
      expect(iconElement).toBeInTheDocument();
    });
  });
});
