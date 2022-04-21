# Queue

A custom queue implementation.

## Why?

We can create use an array as a stack in JS, and it would be ok, since it fulfils all of the performance requirements.

However, if we wan't a queue (FIFO), an array becomes not a good choice, since "dequeue" (i.e. shift) will hurt a performance.

That's why if you have a queue logic in your app it's better to create a custom implementation.

```ts
// FILO
const stack: string[] = [];

stack.push('asdf');
stack.push('asdf2');
stack.push('hello');

// O(1)
stack.pop(); // 'hello'
stack.pop(); // 'asdf2'
stack.pop(); // 'asdf'

// FIFO
const queue = [];

queue.push('asdf');
queue.push('asdf2');
queue.push('hello');

// O(n) - not performant
queue.shift(); // asdf
queue.shift(); // asdf2
queue.shift(); // hello
```
