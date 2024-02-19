import UrlShortenForm from "@/components/layout/UrlShortenForm";
import { Url } from "@/lib/userModel";
import { ShrtlnkResponse } from "@/types/axios";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
type ResponObj = {
  error: string | null;
  loading: boolean;
  value: ShrtlnkResponse;
  executeFn: (params: Url) => Promise<ShrtlnkResponse>;
};
describe("UrlShortenForm", () => {
  // should render the form with input and submit button
  it("should render the form with input and submit button", () => {
    // Arrange
    const responObjUrl: ResponObj = {
      error: null,
      loading: false,
      value: { message: "Network Error" },
      executeFn: jest.fn(),
    };
    const setStoredValue = jest.fn();

    // Act
    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    // Assert
    expect(screen.getByLabelText("Shorten a link here..")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Shortten it !" })
    ).toBeInTheDocument();
  });

  // // should submit the form with valid url and call executeFn with the data
  it("should submit the form with valid url and call executeFn with the data", async () => {
    // Arrange
    const objUrl = {
      url: "",
    };
    const setStoredValue = jest.fn();
    const responObjUrl: ResponObj = {
      error: null,
      loading: false,
      value: null,
      executeFn: jest.fn(),
    };
    const mockedResponse = {
      url: "string",
      key: "string",
      shrtlnk: "string",
    };
    responObjUrl.executeFn.mockResolvedValueOnce(mockedResponse);

    render(
      <UrlShortenForm
        responObjUrl={responObjUrl}
        setStoredValue={setStoredValue}
      />
    );

    const input = screen.getByLabelText(
      "Shorten a link here.."
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Shortten it !" });

    // Act
    fireEvent.change(input, { target: { value: "https://example.com" } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(responObjUrl.executeFn).toHaveBeenCalledWith({
        url: "https://example.com",
      });
      expect(setStoredValue).toHaveBeenCalledWith([mockedResponse]);
    });
  });

  // // should reset the form after successful submission
  // it('should reset the form after successful submission', async () => {
  //   // Arrange
  //   const responObjUrl = {
  //     error: null,
  //     loading: false,
  //     value: {},
  //     executeFn: jest.fn(),
  //   };
  //   const setStoredValue = jest.fn();
  //   const mockedResponse = {
  //     url: 'string',
  //     key: 'string',
  //     shrtlnk: 'string',
  //   };
  //   responObjUrl.executeFn.mockResolvedValueOnce(mockedResponse);

  //   render(<UrlShortenForm responObjUrl={responObjUrl} setStoredValue={setStoredValue} />);

  //   const input = screen.getByLabelText('Shorten a link here..');
  //   const submitButton = screen.getByRole('button', { name: 'Shortten it !' });

  //   // Act
  //   userEvent.type(input, 'https://example.com');
  //   userEvent.click(submitButton);

  //   // Assert
  //   await waitFor(() => {
  //     expect(input).toHaveValue('');
  //   });
  // });

  // // should display error message if executeFn returns an object without shrtlnk property
  // it('should display error message if executeFn returns an object without shrtlnk property', async () => {
  //   // Arrange
  //   const responObjUrl = {
  //     error: null,
  //     loading: false,
  //     value: {},
  //     executeFn: jest.fn(),
  //   };
  //   const setStoredValue = jest.fn();
  //   const mockedResponse = {
  //     url: 'string',
  //     key: 'string',
  //   };
  //   responObjUrl.executeFn.mockResolvedValueOnce(mockedResponse);

  //   render(<UrlShortenForm responObjUrl={responObjUrl} setStoredValue={setStoredValue} />);

  //   const input = screen.getByLabelText('Shorten a link here..');
  //   const submitButton = screen.getByRole('button', { name: 'Shortten it !' });

  //   // Act
  //   userEvent.type(input, 'https://example.com');
  //   userEvent.click(submitButton);

  //   // Assert
  //   await waitFor(() => {
  //     expect(screen.getByText('Error: Invalid response')).toBeInTheDocument();
  //     expect(setStoredValue).not.toHaveBeenCalled();
  //   });
  // });

  // // should display error message if executeFn returns an object with empty shrtlnk property
  // it('should display error message if executeFn returns an object with empty shrtlnk property', async () => {
  //   // Arrange
  //   const responObjUrl = {
  //     error: null,
  //     loading: false,
  //     value: {},
  //     executeFn: jest.fn(),
  //   };
  //   const setStoredValue = jest.fn();
  //   const mockedResponse = {
  //     url: 'string',
  //     key: 'string',
  //     shrtlnk: '',
  //   };
  //   responObjUrl.executeFn.mockResolvedValueOnce(mockedResponse);

  //   render(<UrlShortenForm responObjUrl={responObjUrl} setStoredValue={setStoredValue} />);

  //   const input = screen.getByLabelText('Shorten a link here..');
  //   const submitButton = screen.getByRole('button', { name: 'Shortten it !' });

  //   // Act
  //   userEvent.type(input, 'https://example.com');
  //   userEvent.click(submitButton);

  //   // Assert
  //   await waitFor(() => {
  //     expect(screen.getByText('Error: Invalid response')).toBeInTheDocument();
  //     expect(setStoredValue).not.toHaveBeenCalled();
  //   });
  // });

  // // should display error message if executeFn returns an error object
  // it('should display error message if executeFn returns an error object', async () => {
  //   // Arrange
  //   const responObjUrl = {
  //     error: null,
  //     loading: false,
  //     value: {},
  //     executeFn: jest.fn(),
  //   };
  //   const setStoredValue = jest.fn();
  //   const errorMessage = 'Something went wrong !';
  //   responObjUrl.executeFn.mockRejectedValueOnce(new Error(errorMessage));

  //   render(<UrlShortenForm responObjUrl={responObjUrl} setStoredValue={setStoredValue} />);

  //   const input = screen.getByLabelText('Shorten a link here..');
  //   const submitButton = screen.getByRole('button', { name: 'Shortten it !' });

  //   // Act
  //   userEvent.type(input, 'https://example.com');
  //   userEvent.click(submitButton);

  //   // Assert
  //   await waitFor(() => {
  //     expect(screen.getByText('Error: Something went wrong !')).toBeInTheDocument();
  //     expect(setStoredValue).not.toHaveBeenCalled();
  //   });
  // });
});
