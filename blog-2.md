# Why `any` is a Type Safety hole in TypeScript?

## Introduction
TypeScript is designed to provide type safety on top of JavaScript. However, "any" type completely bypasses this safety system. Because of this, "any" is called a ***type safety hole***.

In this blog, we'll explore why "any" is dangerous and how it can break your application silently.

---
The "any" type tells TypeScript: 
> "Don't check this value. Trust me."

Example: 
```ts
let value: any = "Hello";
value = 10;
value = true;
```