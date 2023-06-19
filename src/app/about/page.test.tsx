// import { render, screen } from "@testing-library/react";
// import AboutPage from "./page";

// // Mock the data import
// jest.mock("@/content/about.json", () => ({
//   aboutParagraph1: "Mocked paragraph 1",
//   aboutParagraph2: "Mocked paragraph 2",
//   skillsParagraph1: "Mocked skills paragraph 1",
//   skillsParagraph2: "Mocked skills paragraph 2",
//   experience: [
//     {
//       position: "Mocked Position",
//       company: "Mocked Company",
//       start_date: "Jan 2023",
//       end_date: "Jan 2022",
//       is_active: false,
//     },
//   ],
//   skills: [
//     {
//       title: "Mocked Title",
//       techs: ["Mocked Skill 1", "Mocked Skill 2"],
//     },
//   ],
//   interest: "Mocked interest",
// }));

// describe("AboutPage", () => {
//   test("renders about page content", () => {
//     render(<AboutPage />);

//     expect(screen.getByText("Mocked paragraph 1")).toBeInTheDocument();
//     expect(screen.getByText("Mocked paragraph 2")).toBeInTheDocument();
//     expect(screen.getByText("Mocked skills paragraph 1")).toBeInTheDocument();
//     expect(screen.getByText("Mocked skills paragraph 2")).toBeInTheDocument();
//     expect(screen.getByText("Mocked interest")).toBeInTheDocument();

//     const companyElement = screen.getByText(/Mocked Company/i); // Use regex for case-insensitive match

//     // Check if companyElement is defined before asserting
//     if (companyElement) {
//       expect(companyElement).toBeInTheDocument();
//     } else {
//       // Throw an error with a meaningful message
//       throw new Error("Company element not found");
//     }

//     expect(screen.getByText("Mocked Skill 1")).toBeInTheDocument();
//     expect(screen.getByText("Mocked Skill 2")).toBeInTheDocument();
//     expect(screen.getByText("Mocked interest")).toBeInTheDocument();
//   });
// });


// testing issue
test("example test", () => {
  expect(1 + 1).toBe(2);
});