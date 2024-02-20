import Footer from "@/components/layout/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  // The function renders a footer element with a dark violet background.
  it("should render a footer element with a dark violet background", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");

    expect(footer).toBeDefined();
  });

  // The footer contains a logo element with a link to the homepage.
  it("should contain a logo element with a link to the homepage", () => {
    render(<Footer />);
    const img = screen.getAllByAltText("shortly logo");
    expect(img).toBeDefined();
  });

  // // The footer contains three sections: "Features", "Resources", and "Company".
  it('should contain three sections: "Features", "Resources", and "Company"', () => {
    render(<Footer />);
    const Features = screen.getByText(/Features/i);
    const Resources = screen.getByText(/Resources/i);
    const Company = screen.getByText(/Company/i);

    expect(Features).toBeDefined();
    expect(Resources).toBeDefined();
    expect(Company).toBeDefined();
  });
});
