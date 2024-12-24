# wouter-search

Provide `useSearchParams()` and `useSearchParam()` hooks for [wouter](https://github.com/molefrog/wouter).

This project is based on [junwen-k](https://github.com/junwen-k)'s [initial work](https://github.com/molefrog/wouter/pull/391).

## Installation

```bash
npm install --save wouter-search
```

## Hooks

### useSearchParams()

Allow you to get and set all search parameters. The API is **identical** to [react-router's same name hook](https://api.reactrouter.com/v7/functions/react_router.useSearchParams.html).
The first returned value is a `URLSearchParams` object and the second returned value is a setter that accepts a `URLSearchParams` object with options.

```js
function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
}
```
