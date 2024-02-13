# slice

创建从开始到（但不包括）结束的数组切片。

:::tip

使用此方法代替 [Array#slice](https://duckduckgo.com/?q=%21%20site%3Adeveloper.mozilla.org%20Array/slice) 以确保返回密集数组。

:::

```ts
const array = [1, 2, 3, 4]

_.slice(array, 2)
// => [3, 4]
```
