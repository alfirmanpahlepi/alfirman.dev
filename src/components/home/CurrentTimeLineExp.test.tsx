import { render } from "@testing-library/react";
import CurrentTimeLineExp from "./CurrentTimeLineExp";

// Sample experience data for testing
const experienceData = [
  {
    position: "Software Engineer",
    company: "ABC Company",
    start_date: "2020-01-01",
    end_date: "2021-12-31",
    is_active: true,
  },
  {
    position: "Frontend Developer",
    company: "XYZ Corporation",
    start_date: "2018-05-15",
    end_date: "2019-12-31",
    is_active: false,
  },
];

describe("CurrentTimeLineExp", () => {
  it("renders experience items correctly", () => {
    const { getByText } = render(
      <CurrentTimeLineExp experience={experienceData} />
    );

    // Check if the position and company names are rendered
    expect(getByText(/ABC Company/i)).toBeInTheDocument();
    expect(getByText(/XYZ Corporation/i)).toBeInTheDocument();

    // Check if the date range is rendered using a regular expression
    expect(getByText(/2020-01-01.*2021-12-31/i)).toBeInTheDocument();
    expect(getByText(/2018-05-15.*2019-12-31/i)).toBeInTheDocument();
  });

  // Add more test cases if needed
});
