import UrlShortenForm from "@/components/layout/UrlShortenForm";
import { useAsyncFn } from "@/hooks/useAsync";
import { render } from "@testing-library/react";
// In your test file
import { vi } from "vitest";

const mockExecuteFn = vi.fn();

// // Créez un mock de la fonction useAsyncFn
// jest.mock("@/hooks/useAsync", () => ({
//   ...jest.requireActual("@/hooks/useAsync"), // Gardez les fonctionnalités réelles de votre fichier
//   useAsyncFn: jest.fn(), // Remplacez la fonction par un mock
// }));

describe("test everything about the urlform", () => {
  //   useAsyncFn.mockReturnValue({
  //     executeFn: jest.fn(),
  //     loading: false,
  //     error: null,
  //     value: {
  //       /* Mettez les valeurs de votre ShrtlnkResponse ici */
  //     },
  //   });

  it("should render the invalid url form", () => {
    const mockedResponse = {
      url: "string",
      key: "string",
      shrtlnk: "string",
    };
    mockExecuteFn.mockResolvedValueOnce(mockedResponse);
    const { executeFn, value, loading } = useAsyncFn(mockExecuteFn);
    const fn = jest.fn();

    render(
      <UrlShortenForm
        responObjUrl={{
          executeFn,
          error,
          loading,
          value,
        }}
        setStoredValue={fn}
      />
    );
  });

  it("Should check input value", async () => {
    // Setup
    await render(<App />);
    // Assert
    const input = screen.getByLabelText(
      "Shorten a link here.."
    ) as HTMLInputElement;
    const button = screen.getByRole("button", {
      name: "Shortten it !",
    }) as HTMLButtonElement;

    // Actions
    fireEvent.change(input, {
      target: {
        value: "testing-library.com/docs/dom-testing-library/api-events",
      },
    });
    fireEvent.click(button);

    expect(screen.getByRole("p", { name: "Invalid url" })).toBeInTheDocument();
  });

  it("Should have the correct value", async () => {
    // Assert
    const input = screen.getByLabelText(
      "Shorten a link here.."
    ) as HTMLInputElement;

    // Actions
    fireEvent.change(input, { target: { value: "Hello world" } });
    // console.log("first click : ", input.target.value);
    expect(input.value).toEqual("Hello world");
  });
});
