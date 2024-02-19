import App from "@/App";
import UrlShortenForm from "@/components/layout/UrlShortenForm";
import { useAsyncFn } from "@/hooks/useAsync";
import { shrtlnkUrl } from "@/services/url.services";
import { render, screen } from "@testing-library/react";
// In your test file
import { vi } from "vitest";

const mockExecuteFn = vi.fn();

// Créez un mock de la fonction useAsyncFn
// jest.mock("", () => ({
//   ...jest.requireActual("../hooks/useAsync.ts"), // Gardez les fonctionnalités réelles de votre fichier
//   useAsyncFn: jest.fn(), // Remplacez la fonction par un mock
// }));
vi.mock("../hooks/useAsync.ts", async (importOriginal) => {
  return {
    useAsyncFn: vi.fn(),
  };
});

vi.mock("../services/url.services.ts", async (importOriginal) => {
  return {
    shrtlnkUrl: vi.fn(),
  };
});

describe("test everything about the urlform", () => {
  // useAsyncFn({
  //   executeFn: jest.fn(),
  //   loading: false,
  //   error: null,
  //   value: {
  //     /* Mettez les valeurs de votre ShrtlnkResponse ici */
  //   },
  // });
  // });

  it("should render the form correctly", async function () {
    await render(<App />);

    // Assert
    const button = (await screen.getByRole("button", {
      name: "Shortten it !",
    })) as HTMLButtonElement;

    const input = screen.queryByPlaceholderText(
      "Shorten a link here.."
    ) as HTMLInputElement;

    expect(button).toBeDefined();
    expect(input).toBeDefined();
  });
  it("should render the invalid url form", async () => {
    vi.mocked(useAsyncFn).mockReturnValue({
      error: null,
      value: null,
      loading: false,
      executeFn: vi.fn(),
    });

    const mockFoo = vi.mocked(shrtlnkUrl).mockResolvedValueOnce({
      url: "https://vitest.dev/api/vi.html#vi-mock",
      key: "string",
      shrtlnk: "https://vitest.dev",
    });

    const { executeFn, value, loading, error } = useAsyncFn(mockFoo);
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

  // it("Should check input value", async () => {
  //   // Setup
  //   await render(<App />);
  //   // Assert
  //   const input = screen.getByLabelText(
  //     "Shorten a link here.."
  //   ) as HTMLInputElement;
  //   const button = screen.getByRole("button", {
  //     name: "Shortten it !",
  //   }) as HTMLButtonElement;

  //   // Actions
  //   fireEvent.change(input, {
  //     target: {
  //       value: "testing-library.com/docs/dom-testing-library/api-events",
  //     },
  //   });
  //   fireEvent.click(button);

  //   expect(screen.getByRole("p", { name: "Invalid url" })).toBeInTheDocument();
  // });

  // it("Should have the correct value", async () => {
  //   // Assert
  //   const input = screen.getByLabelText(
  //     "Shorten a link here.."
  //   ) as HTMLInputElement;

  //   // Actions
  //   fireEvent.change(input, { target: { value: "Hello world" } });
  //   // console.log("first click : ", input.target.value);
  //   expect(input.value).toEqual("Hello world");
  // });
});
