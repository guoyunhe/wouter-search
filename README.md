# wouter-search

![Version](https://img.shields.io/npm/v/wouter-search)
![Downloads](https://img.shields.io/npm/dw/wouter-search)
![Bundle size](https://img.shields.io/bundlephobia/minzip/wouter-search)

Provide `useSearchParam()` and `useSearchParamJson()` hooks for [wouter](https://github.com/molefrog/wouter).

This project is based on [junwen-k](https://github.com/junwen-k)'s [initial work](https://github.com/molefrog/wouter/pull/391).

Note:

- Require `wouter` 3.4+
- Require `react` 16.8+. `preact` should work via [preact/compat](https://preactjs.com/guide/v10/switching-to-preact/).

## Installation

```bash
npm install --save wouter-search
```

## Hooks

### useSearchParams()

It is now part of `wouter`! [Read the document](https://github.com/molefrog/wouter/tree/use-search-params-docs#usesearchparams-search-parameters)

### useSearchParam()

A simple wrapper around `useSearchParams`. By giving a key/name, you can control a specific search parameter straight-forward.

```jsx
import { useSearchParam, useSearchParams } from 'wouter-search';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useSearchParam('query', searchParams, setSearchParams);

  return <input onChange={(e) => setQuery(e.target.value, { replace: true })} />;
}
```

### useSearchParamJson()

If your search parameter contains JSON data, `useSearchParamJson()` will make your life much easier!

```jsx
import { useSearchParamJson, useSearchParams } from 'wouter-search';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [solution, setSolution] = useSearchParamJson('solution', searchParams, setSearchParams);

  return (
    <div>
      <h1>{solution.name}</h1>
      <p>{solution.description}</p>
    </div>
  );
}
```
