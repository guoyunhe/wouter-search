# wouter-search

Provide `useSearchParams()` and `useSearchParam()` hooks for [wouter](https://github.com/molefrog/wouter).

This project is based on [junwen-k](https://github.com/junwen-k)'s [initial work](https://github.com/molefrog/wouter/pull/391).

Note:

- Require wouter 3.x
- Require React 16.8+. preact is **NOT** supported at the moment. (open an issue if you need it!)
- Search parameters are considered as strings. You have to write your own wrapper if you need to process JSON. (open an issue if you really need it!)

## Installation

```bash
npm install --save wouter-search
```

## Hooks

### useSearchParams()

Allow you to get and set all search parameters. The API is similar but not the same to [react-router's](https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html).
The first returned value is a `URLSearchParams` object and the second returned value is a setter that accepts a `URLSearchParams` object with options.

```js
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

### useSearchParam(key: string)

A simple wrapper around `useSearchParams`. By giving a key/name, you can control a specific search parameter straight-forward.

```js
import { useSearchParam } from 'wouter-search';

function MyPage() {
  const [query, setQuery] = useSearchParam('query');

  return <input onChange={(e) => setQuery(e.target.value, { replace: true })} />;
}
```
