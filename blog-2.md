# How Pick & Omit keep your code DRY in TypeScript?

## Introduction

In real world applications, you often need variations of base type. For example, a full "User" object
for the database and a smaller version for UI and APIs. Rewriting types again and again leads to duplication and inconsistency.

TypeScript solves this with utility types like "Pick" and "Omit".

---

## The Problem: Code Duplication

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type TPublicUser = Pick<User, "id" | "name">;
```
