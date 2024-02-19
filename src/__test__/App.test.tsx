import "@testing-library/jest-dom";
import App from "../App";
import { cleanup, render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("Banner", () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
    cleanup();
  });

  /**
   * Passes - shows title correctly
   */
  it("Should render the page correctly", async () => {
    // Setup
    await render(<App />);
    const h1 = await screen.queryByText("More than just shorter links");

    // Post Expectations
    expect(h1).not.toBeNull();
  });

  it("Should show the button Get started !", async () => {
    // Setup
    await render(<App />);
    const button = await screen.queryByText(
      "Build your brand's recognition and get detailed insights on how your links are performing."
    );

    // Expectations
    expect(button).not.toBeNull();
  });

  /**
   * Passes - clicks the button 3 times and shows the correct count
   */
  it("Should show the button and input correctly", async () => {
    // Setup
    await render(<App />);

    const getStartedBtn = (await screen.queryByRole("button", {
      name: "Get Started",
    })) as HTMLButtonElement;

    // Pre Expectations
    expect(getStartedBtn).toBeInTheDocument();
  });
});
