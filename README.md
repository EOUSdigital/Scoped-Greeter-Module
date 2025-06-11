# Lesson 11: Step 4 — Project Challenge

## 🧪 Challenge: Scoped Greeter Module

### Scenario
We are building a greeting module that:
- Encapsulates private data using an **IIFE**
- Uses **arrow functions** to preserve `this`
- Demonstrates clear understanding of **scope** and **execution context**

---

## 📋 Requirements

1. **Wrap logic inside an IIFE** to isolate scope.
2. Use a **regular function** for object methods so `this` works properly.
3. Use an **arrow function** inside `setTimeout()` to inherit `this`.
4. Demonstrate that private variables are inaccessible from outside.

---

## 💡 Bonus Ideas

- Add a method `changeName(newName)` that updates `this.name`
- Add another private variable and use it in a method

---

## 🧠 Reflection Questions

- Why cannot we access `greeting` from outside?
- What would happen if we used a regular function in `setTimeout()`?
- Why does `this.name` still work inside the arrow function?

---
