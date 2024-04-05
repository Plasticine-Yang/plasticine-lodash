# isObjectLike

Checks if value is object-like. A value is object-like if it's not null and has a typeof result of "object".

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
