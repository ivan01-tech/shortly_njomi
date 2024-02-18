// import { useCallback, useEffect, useState } from "react";

// // type of the state
// interface AsyncHookState<T> {
//   error: string | null;
//   loading: boolean;
//   value: T | null;
// }

// interface AsyncHook<T> extends AsyncHookState<T> {
//   executeFn: (...params: unknown[]) => Promise<T>;
// }
// // to direct make request on page load
// export const useAsync = function (func: (params: unknown) => Promise<unknown>) {
//   const { executeFn, ...state } = useAsyncInternal(func, true, []);

//   useEffect(
//     function () {
//       executeFn();
//     },
//     [executeFn]
//   );

//   return state;
// };

// export const useAsyncFn = function (
//   func: (params: unknown) => Promise<unknown>,
//   dependencies = []
// ) {
//   return useAsyncInternal(func, false, dependencies);
// };

// export function useAsyncInternal<T>(
//   func: (...params: unknown[]) => Promise<T>,
//   initial: boolean,
//   dependencies: unknown[] = []
// ): AsyncHook<T> {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(initial);
//   const [value, setValue] = useState<T | null>(null);

//   const executeFn = useCallback(
//     async function (...params: unknown[]): Promise<T> {
//       setLoading(true);
//       return func(...params)
//         .then((res) => {
//           setValue(res);
//           setError(null);
//           return res;
//         })
//         .catch((err) => {
//           setError(err);
//           setValue(null);
//           return Promise.reject(err);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     },
//     [func, ...dependencies]
//   );

//   return { error, loading, value, executeFn };
// }
