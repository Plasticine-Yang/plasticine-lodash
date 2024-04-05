# isObject

检查值是否是对象的[语言类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)。（例如数组、函数、对象、RegExp、new Number(0) 和 new String('')）

```ts
isObject({})
// => true

isObject([1, 2, 3])
// => true

isObject(_.noop)
// => true

isObject(null)
// => false
```
