import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutMe component", () => {
  it("renders the about text", () => {
    const about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    render(<AboutMe about={about} />);

    const aboutText = screen.getByText(about);
    expect(aboutText).toBeInTheDocument();
  });
});
