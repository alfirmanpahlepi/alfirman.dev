import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero component", () => {
  test("renders component correctly", () => {
    const name = "John Doe";
    const headline = "Frontend Developer";
    const description = "Lorem ipsum dolor sit amet";
    const profilePicture = "/profile-picture.jpg";

    render(
      <Hero
        name={name}
        headline={headline}
        description={description}
        profile_picture={profilePicture}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();

    expect(screen.getByText(headline)).toBeInTheDocument();

    expect(screen.getByText(description)).toBeInTheDocument();
    
    const image = screen.getByAltText("Alfirman Pahlepi");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fprofile-picture.jpg&w=3840&q=75"
    );
  });
});
