import { useCallback, useMemo, useRef } from 'react';
import { useLocation, useSearch } from 'wouter';

export type URLSearchParamsInit = ConstructorParameters<typeof URLSearchParams>[0];
export type SetSearchParams = (
  nextInit: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit),
  options?: { replace?: boolean; state?: any },
) => void;

export function useSearchParams(): [URLSearchParams, SetSearchParams] {
  const [, navigate] = useLocation();

  const search = useSearch();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const setSearchParamsRef = useRef<SetSearchParams>();
  setSearchParamsRef.current = (nextInit, options?: { replace?: boolean; state?: any }) => {
    const newSearchParams = new URLSearchParams(
      typeof nextInit === 'function' ? nextInit(searchParams) : nextInit,
    );
    navigate('?' + newSearchParams, options);
  };

  const setSearchParams = useCallback<SetSearchParams>(
    (...args) => setSearchParamsRef.current(...args),
    [],
  );

  return [searchParams, setSearchParams];
}
