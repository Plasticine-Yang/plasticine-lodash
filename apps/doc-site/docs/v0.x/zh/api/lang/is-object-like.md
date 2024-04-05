# isObjectLike

检查值是否类似对象。如果一个值不是 null 并且结果的类型为 “object”，那么它就是 object。

```ts
isObjectLike({})
// => true

isObjectLike([1, 2, 3])
// => true

isObjectLike(Function)
// => false

isObjectLike(null)
// => false
```
