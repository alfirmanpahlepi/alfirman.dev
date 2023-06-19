import { render } from "@testing-library/react";
import NavItem from "./NavItem";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/"), // Mock the usePathname hook to return the desired pathname
}));

describe("NavItem", () => {
  test("renders correctly", () => {
    const { getByText, queryByTestId } = render(<NavItem />);

    // Assert that the NavItem renders the LinksNav component
    expect(() => getByText("home")).not.toThrow();

    // Assert the absence of the motion div when the pathname doesn't match a nav item
    const motionDivElement = queryByTestId("motion-div");
    expect(motionDivElement).toBeNull();

  });
});
