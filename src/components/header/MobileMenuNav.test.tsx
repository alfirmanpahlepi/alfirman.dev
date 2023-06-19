import { render, fireEvent } from "@testing-library/react";
import MobileMenuNav from "./MobileMenuNav";

test("MobileMenuNav renders correctly", () => {
  // Render the MobileMenuNav component
  const { getByLabelText, queryByTestId } = render(<MobileMenuNav />);

  // Assert that the menu button is rendered
  const menuButton = getByLabelText("Toggle menu");
  expect(menuButton).toBeInTheDocument();

  // Get the child elements of the menu button
  const menuButtonChildren = menuButton.querySelectorAll("*");

  // Assert that the data-hide attribute is "false" on the menu button or its child elements
  let hasDataHideAttribute = false;
  menuButtonChildren.forEach((child) => {
    if (child.getAttribute("data-hide") === "false") {
      hasDataHideAttribute = true;
    }
  });
  expect(hasDataHideAttribute).toBe(true);

  // Assert that the menu links are not rendered initially
  expect(queryByTestId("menu-links")).not.toBeInTheDocument();

  // Simulate clicking the menu button
  fireEvent.click(menuButton);

  // Assert that the menu links are rendered after clicking the menu button
  expect(queryByTestId("menu-links")).toBeInTheDocument();
});
