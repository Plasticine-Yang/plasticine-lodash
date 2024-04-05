# compact

Creates an array with all falsy values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsy.

```ts
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```
