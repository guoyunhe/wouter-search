import { useCallback, useMemo, useRef } from 'react';
import { useSearchParam } from './useSearchParam';
import { SetSearchParams } from './useSearchParams';

export type SetSearchParamJson<T> = (
  nextInit: T | ((prev: T) => T),
  options?: { replace?: boolean; state?: any },
) => void;

export function useSearchParamJson<T>(
  key: string,
  searchParams: URLSearchParams,
  setSearchParams: SetSearchParams,
): [T | null, SetSearchParamJson<T>] {
  const [searchParam, setSearchParam] = useSearchParam(key, searchParams, setSearchParams);

  const searchParamJson = useMemo<T>(() => {
    try {
      return JSON.parse(searchParam);
    } catch (e) {
      // invalid json, return null
      return null;
    }
  }, [searchParam]);

  const setSearchParamJsonRef = useRef<SetSearchParamJson<T>>();

  setSearchParamJsonRef.current = (nextInit, options) => {
    setSearchParam((prev) => {
      if (typeof nextInit === 'function') {
        let prevJson: T;
        try {
          prevJson = JSON.parse(prev);
        } catch (e) {
          // invalid json, return null
          prevJson = null;
        }
        return JSON.stringify((nextInit as any)(prevJson));
      } else {
        return JSON.stringify(nextInit);
      }
    }, options);
  };

  const setSearchParamJson = useCallback<SetSearchParamJson<T>>(
    (...args) => setSearchParamJsonRef.current(...args),
    [],
  );

  return [searchParamJson, setSearchParamJson];
}
