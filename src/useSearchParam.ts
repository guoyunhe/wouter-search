import { useCallback, useRef } from 'react';
import { useSearchParams } from './useSearchParams';

export type SetSearchParam = (
  nextInit: string | null | ((prev: string | null) => string | null),
  options?: { replace?: boolean; state?: any },
) => void;

export function useSearchParam(key: string): [string | null, SetSearchParam] {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get(key);

  const setSearchParamRef = useRef<SetSearchParam>();

  setSearchParamRef.current = (nextInit, options) => {
    setSearchParams((prev) => {
      const prevValue = prev.get(key);
      prev.set(key, typeof nextInit === 'function' ? nextInit(prevValue) : nextInit);
      return prev;
    }, options);
  };

  const setSearchParam = useCallback<SetSearchParam>(
    (...args) => setSearchParamRef.current(...args),
    [],
  );

  return [searchParam, setSearchParam];
}
