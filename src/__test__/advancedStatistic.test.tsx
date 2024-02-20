import App from "@/App";
import { render, screen } from "@testing-library/react";

describe("Advanced Statistics", async function () {
  it("should display Advanced Statistics,  Fully customizable ,  Detailed Records , Brands Recognition", async function () {
    await render(<App />);

    const adStatistics = screen.getByText(/Advanced Statistics/);
    const brandRec = screen.getByText(/Brands Recognition/);
    const fullyCus = screen.getByText(/Fully customizable/);
    const detRecod = screen.getByText(/Detailed Records/);

    expect(adStatistics).toBeDefined();
    expect(brandRec).toBeDefined();
    expect(fullyCus).toBeDefined();
    expect(detRecod).toBeDefined();
  });
});
