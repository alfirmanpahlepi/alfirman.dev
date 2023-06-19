import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import TitlePage from "./TitlePage";

describe("TitlePage", () => {
  it("renders the title with the correct animation properties", async () => {
    render(<TitlePage title="My Title" />);
    const titleElement = screen.getByText("My Title");

    expect(titleElement).toBeInTheDocument();
  });
});
