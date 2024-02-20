/* eslint-disable react-hooks/exhaustive-deps */
import { IError } from "@/types/axios";
import { useCallback, useState } from "react";

// type of the state
export interface AsyncHookState<T> {
  error: string | null;
  loading: boolean;
  value: T | null;
}

export interface AsyncHook<T> extends AsyncHookState<T> {
  executeFn: (...params: unknown[]) => Promise<T>;
}

// export const useAsync = function <U, V>(func: (params: U) => Promise<V>) {
//   const { executeFn, ...state } = useAsyncInternal(func, true, []);

//   useEffect(
//     function () {
//       executeFn();
//     },
//     [executeFn]
//   );

//   return state as {
//     error: string | null;
//     loading: boolean;
//     value: V;
//     executeFn: (params: U) => void;
//   };
// };

export const useAsyncFn = function <U, V>(
  func: (params: U) => Promise<V>,
  dependencies = []
) {
  return useAsyncInternal(func, false, dependencies) as {
    error: string | null;
    loading: boolean;
    value: V;
    executeFn: (params: U) => Promise<V>;
  };
};

/**
  An object that content error, loading, and the value of the request
 */
export function useAsyncInternal<U, V>(
  func: (params: U) => Promise<V>,
  initial: boolean,
  dependencies: unknown[] = []
) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(initial);
  const [value, setValue] = useState<V | null>(null);

  const executeFn = useCallback(
    async function (params: U) {
      setLoading(true);
      return func(params)
        .then((res) => {
          if (res == null) {
            setValue(null);
            setError("object is null");
            return Promise.reject({ message: "object is null" });
          } else if ("message" in (res as unknown as IError)) {
            setValue(null);
            setError((res as unknown as IError).message);
            return Promise.reject({
              message: (res as unknown as IError).message,
            });
          } else {
            setValue(res);
            setError(null);
            return res;
          }
        })
        .catch((err) => {
          setError(err.message);
          setValue(null);
          return Promise.reject({ message: err.message });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [func, ...dependencies]
  );

  return { error, loading, value, executeFn };
}
