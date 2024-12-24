# wouter-search

Provide `useSearchParams()`, `useSearchParam()` and `useSearchParamJson()` hooks for [wouter](https://github.com/molefrog/wouter).

This project is based on [junwen-k](https://github.com/junwen-k)'s [initial work](https://github.com/molefrog/wouter/pull/391).

Note:

- Require wouter 3.x
- Require React 16.8+. preact is **NOT** supported at the moment. (open an issue if you need it!)

## Installation

```bash
npm install --save wouter-search
```

## Hooks

### useSearchParams()

Allow you to get and set all search parameters. The API is similar but not the same to [react-router's](https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html).
The first returned value is a `URLSearchParams` object and the second returned value is a setter that accepts a `URLSearchParams` object with options.

```js
import { useSearchParams } from 'wouter-search';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <button
      onClick={() => {
        // push new history entry
        setSearchParams((prev) => {
          prev.set('foo', 'bar');
        });
        // or replace history entry
        setSearchParams(
          (prev) => {
            prev.set('foo', 'bar');
          },
          {
            replace: true,
          },
        );
      }}
    >
      foobar
    </button>
  );
}
```

### useSearchParam()

A simple wrapper around `useSearchParams`. By giving a key/name, you can control a specific search parameter straight-forward.

```js
import { useSearchParam, useSearchParams } from 'wouter-search';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useSearchParam('query', searchParams, setSearchParams);

  return <input onChange={(e) => setQuery(e.target.value, { replace: true })} />;
}
```

### useSearchParamJson()

If your search parameter contains JSON data, `useSearchParamJson()` will make your life much easier!

```js
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
