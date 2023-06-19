import { render } from "@testing-library/react";
import AnimationContainer from "./AnimationContainer";

describe("AnimationContainer", () => {
  it("renders children", () => {
    const { getByText } = render(
      <AnimationContainer>
        <div>Test children</div>
      </AnimationContainer>
    );

    const childrenElement = getByText("Test children");
    expect(childrenElement).toBeInTheDocument();
  });

  it("applies custom class name", () => {
    const { container } = render(
      <AnimationContainer customClassName="custom-class">
        <div>Test children</div>
      </AnimationContainer>
    );

    const animationContainer = container.querySelector(".custom-class");
    expect(animationContainer).toBeInTheDocument();
  });

  it("has initial opacity of 0", () => {
    const { container } = render(
      <AnimationContainer customClassName="custom-class">
        <div>Test children</div>
      </AnimationContainer>
    );

    const animationContainer = container.querySelector(".custom-class");
    expect(animationContainer).toHaveStyle("opacity: 0");
  });
});
