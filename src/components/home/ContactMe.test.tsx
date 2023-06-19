import { render, screen } from "@testing-library/react";
import ContactMe from "./ContactMe";

describe("ContactMe component", () => {
  it("renders the email and phone", () => {
    const email = "jeanrdev@gmail.com";
    const phone = "1234567890";
    render(<ContactMe email={email} phone={phone} />);

    const emailText = screen.getByText(email);
    expect(emailText).toBeInTheDocument();

    const phoneText = screen.getByText(phone);
    expect(phoneText).toBeInTheDocument();
  });
});
