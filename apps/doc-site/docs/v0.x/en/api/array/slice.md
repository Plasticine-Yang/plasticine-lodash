# slice

Creates a slice of array from start up to, but not including, end.

:::tip

This method is used instead of [Array#slice](https://duckduckgo.com/?q=%21%20site%3Adeveloper.mozilla.org%20Array/slice) to ensure dense arrays are returned.

:::

```ts
const array = [1, 2, 3, 4]

_.slice(array, 2)
// => [3, 4]
```
