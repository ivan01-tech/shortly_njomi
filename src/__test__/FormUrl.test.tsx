import UrlShortenForm from "@/components/layout/UrlShortenForm";
import { Url } from "@/lib/userModel";
import { IResponse, ShrtlnkResponse } from "@/types/axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

type ResponObj = {
  error: string | null;
  loading: boolean;
  value: ShrtlnkResponse;
  executeFn: (params: Url) => Promise<ShrtlnkResponse>;
};

vi.mock("../hooks/useAsync.ts", async () => {
  return {
    useAsyncFn: vi.fn(),
  };
});

vi.mock("../services/url.services.ts", async () => {
  return {
    shrtlnkUrl: vi.fn(),
  };
});
describe("UrlShortenForm", () => {
  // should render the form with input and submit button
  it("should render the form with input and submit button", () => {
    // Arrange
    const responObjUrl: ResponObj = {
      error: null,
      loading: false,
      value: null,
      executeFn: vi.fn().mockImplementation((a: IResponse) => {
        return a;
      }),
    };
    const setStoredValue = vi.fn();

    // Act
    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    // Assert
    expect(screen.getByPlaceholderText("Shorten a link here..")).toBeDefined();
    expect(screen.getByText(/Shortten it !/i)).toBeDefined();
  });

  // // should submit the form with valid url and call executeFn with the data
  it("should submit the form with valid url and call executeFn with the data", async () => {
    // Arrange

    const setStoredValue = vi.fn().mockImplementation((a: IResponse) => [a]);
    const mockedResponse = {
      url: "https://example.com",
      key: "https://example.com",
      shrtlnk: "https://example.com",
    };
    const responObjUrl: ResponObj = {
      error: null,
      loading: false,
      value: null,
      executeFn: vi.fn().mockRejectedValue(mockedResponse),
    };

    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    const input = screen.getByPlaceholderText(
      "Shorten a link here.."
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/Shortten it !/i);

    // Act
    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(responObjUrl.executeFn).toHaveBeenCalledWith({
        url: "https://example.com",
      });
      // TODO
      // expect(setStoredValue).toHaveBeenCalled();
      // expect(setStoredValue).toHaveBeenCalledWith(mockedResponse);
    });
  });

  // // should reset the form after successful submission
  it("should reset the form after successful submission", async () => {
    // Arrange

    const setStoredValue = vi.fn().mockImplementation((a: IResponse) => [a]);
    const mockedResponse = {
      url: "https://example.com",
      key: "https://example.com",
      shrtlnk: "https://example.com",
    };
    const responObjUrl: ResponObj = {
      error: null,
      loading: false,
      value: null,
      executeFn: vi.fn().mockRejectedValue(mockedResponse),
    };

    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    const input = screen.getByPlaceholderText(
      "Shorten a link here.."
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/Shortten it !/i);

    // Act
    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(submitButton);
    // Assert
    await waitFor(() => {
      expect(input.value).toEqual("");
    });
  });

  // should display error message if executeFn returns an object without shrtlnk property
  it("should display error message if executeFn returns an object without shrtlnk property", async () => {
    // Arrange

    const setStoredValue = vi.fn().mockImplementation((a: IResponse) => [a]);
    const mockedResponse = {
      message: "Network Error!",
    };
    const responObjUrl: ResponObj = {
      error: "Network Error!",
      loading: false,
      value: null,
      executeFn: vi.fn().mockRejectedValue(mockedResponse),
    };

    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    const input = screen.getByPlaceholderText(
      "Shorten a link here.."
    ) as HTMLInputElement;
    const submitButton = screen.getByText(/Shortten it !/i);

    // Act
    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(screen.getByTestId("errorMsg")).toBeDefined();

      expect(setStoredValue).not.toHaveBeenCalled();
    });
  });
});
