(function () {
  "use strict";

  window.SITE_POSTS = [
    {
      id: "p6",
      featured: true,
      cover: "linear-gradient(135deg, #eee7db 0%, #c0b6a5 55%, #645c50 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "3 min read",
      title: "Hoisting in JavaScript",
      excerpt:
        "Before your code runs, JavaScript scans it and moves every declaration to the top of its scope. Here's why that explains half your \"wait, why did that work\" moments.",
      link: "https://medium.com/@saranvlmna/hoisting-in-javascript-️-f953ac5d02be",
      body: [
        { type: "p", text: "Before your code runs, JavaScript scans it and moves all variable and function declarations to the top of their scope. That's hoisting. It explains a lot of \"wait, why did that work\" and \"why did that throw\" moments." },
        { type: "h3", text: "var: hoisted and set to undefined" },
        { type: "code", text: "console.log(a); // undefined\nvar a = 10;" },
        { type: "p", text: "JavaScript hoists the declaration var a, but not the assignment a = 10. So before line 2 runs, a already exists, it's just empty. That's why you get undefined instead of an error." },
        { type: "h3", text: "let and const: hoisted but locked" },
        { type: "code", text: "console.log(b); // ReferenceError: Cannot access 'b' before initialization\nlet b = 20;\n\nconsole.log(c); // ReferenceError: Cannot access 'c' before initialization\nconst c = 30;" },
        { type: "p", text: "let and const are hoisted too, but JavaScript locks them until the line where you declare them. That locked period is called the temporal dead zone (TDZ). Touch the variable before that line and you get a ReferenceError, not undefined." },
        { type: "h3", text: "Functions: fully hoisted" },
        { type: "code", text: "greet(); // \"Hello!\"\n\nfunction greet() {\n  console.log(\"Hello!\");\n}" },
        { type: "p", text: "Function declarations are hoisted completely, body and all. You can call greet() before its definition appears in the file and it still works." },
        { type: "p", text: "One catch: if you write a function as const greet = function() {} instead, it behaves like a const variable, not a function declaration. It's in the TDZ until that line runs." },
        { type: "h3", text: "Quick reference" },
        {
          type: "table",
          headers: ["", "Hoisted", "Has a value before its line", "Touching it early"],
          rows: [
            ["var", "Yes", "Yes, undefined", "Returns undefined"],
            ["let", "Yes", "No", "Throws ReferenceError"],
            ["const", "Yes", "No", "Throws ReferenceError"]
          ]
        },
        { type: "h3", text: "Why this matters" },
        { type: "p", text: "Most hoisting bugs come from assuming var, let, and const behave the same way before their declaration line. They don't. If you stick to let and const (which most style guides recommend anyway), the TDZ actually protects you: it turns a silent undefined bug into a loud error you'll notice immediately." }
      ]
    },
    {
      id: "p7",
      cover: "linear-gradient(135deg, #f0fae1 0%, #8fa073 55%, #3d472b 100%)",
      category: "Node.js",
      date: "Medium",
      readTime: "4 min read",
      title: "Events and EventEmitter in Node.js",
      excerpt:
        "Events are the backbone of Node.js's asynchronous model. Here's how EventEmitter lets you build, listen for, and manage them — the four patterns you'll reach for constantly.",
      body: [
        { type: "p", text: "In Node.js, an event is an occurrence or action that can be detected and responded to. Events are central to Node.js's asynchronous programming model, allowing you to build responsive, interactive, and scalable applications." },
        { type: "h3", text: "What is the EventEmitter?" },
        { type: "p", text: "The EventEmitter is a core Node.js class that enables you to create, emit, and listen for events. It forms the foundation of Node.js's event-driven architecture." },
        { type: "h3", text: "1. Emitting events" },
        { type: "p", text: "You can trigger an event using the emit method. When an event is emitted, all listeners attached to that event are executed." },
        { type: "code", text: "const EventEmitter = require('events');\nconst myEmitter = new EventEmitter();\n\nmyEmitter.on('greet', () => {\n  console.log('Hello, world!');\n});\n\nmyEmitter.emit('greet'); // Output: Hello, world!" },
        { type: "h3", text: "2. Listening to events" },
        { type: "p", text: "Use the on method to register a listener for a specific event. The listener is a callback function that runs when the event is emitted." },
        { type: "h3", text: "3. Removing listeners" },
        { type: "p", text: "Listeners can be removed using off or removeListener. This is important for preventing memory leaks and managing event-driven behavior efficiently." },
        { type: "h3", text: "4. One-time listeners" },
        { type: "p", text: "The once method allows you to register a listener that executes only the first time the event is emitted." },
        { type: "code", text: "myEmitter.once('greet', () => {\n  console.log('This will only run once.');\n});\n\nmyEmitter.emit('greet'); // This will run\nmyEmitter.emit('greet'); // This will NOT run" },
        { type: "h3", text: "Use cases of EventEmitter" },
        { type: "ul", items: [
          "Custom events: build your own event-driven modules and emit events to communicate between different parts of your application.",
          "Built-in modules: many Node.js modules, like http, fs, and stream, use EventEmitter to handle asynchronous events."
        ] },
        { type: "h3", text: "Why EventEmitter matters" },
        { type: "p", text: "The EventEmitter is a powerful tool for managing asynchronous events in Node.js. It enables developers to:" },
        { type: "ul", items: [
          "Build scalable and maintainable applications",
          "Separate concerns by decoupling different parts of the code",
          "Leverage event-driven patterns to improve responsiveness"
        ] },
        { type: "p", text: "By understanding and using EventEmitter effectively, you can create Node.js applications that are both efficient and highly responsive, making the most of Node.js's asynchronous capabilities." }
      ]
    },
    {
      id: "p8",
      cover: "linear-gradient(135deg, #fff2eb 0%, #d67f48 55%, #402310 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "3 min read",
      title: "Execution Context in JavaScript",
      excerpt:
        "Every line of your code runs inside an execution context — the environment that decides what's in scope, what's hoisted, and what throws a ReferenceError. Here's the model to keep in your head.",
      body: [
        { type: "p", text: "In JavaScript, code runs within an execution context — an environment where your code is evaluated and executed. Understanding execution contexts is key to mastering concepts like hoisting, scope, and the Temporal Dead Zone (TDZ)." },
        { type: "h3", text: "Global execution context" },
        { type: "p", text: "When the JavaScript engine starts running your code, it first creates a global execution context. This is the default environment where all global variables, functions, and objects are defined. There is only one global execution context in a program." },
        { type: "code", text: "var globalVar = 'I am global';\n\nfunction greet() {\n  console.log('Hello!');\n}" },
        { type: "p", text: "Here, globalVar and greet belong to the global execution context." },
        { type: "h3", text: "Function execution context" },
        { type: "p", text: "Whenever you enter a function, a new execution context is created for that function. Each function call has its own execution context, separate from the global context. This context keeps track of local variables, parameters, and the function's scope." },
        { type: "code", text: "function sayHello(name) {\n  var greeting = 'Hello ' + name;\n  console.log(greeting);\n}\n\nsayHello('Alice'); // Execution context for sayHello is created here" },
        { type: "h3", text: "Key concepts within an execution context" },
        { type: "h3", text: "1. Variable hoisting" },
        { type: "p", text: "Variables declared with var are hoisted to the top of their scope and initialized with undefined." },
        { type: "code", text: "console.log(a); // undefined\nvar a = 10;" },
        { type: "h3", text: "2. Function hoisting" },
        { type: "p", text: "Function declarations are hoisted with their definitions, meaning you can call them before they appear in the code." },
        { type: "code", text: "greet(); // \"Hello!\"\n\nfunction greet() {\n  console.log(\"Hello!\");\n}" },
        { type: "h3", text: "3. Temporal Dead Zone (TDZ)" },
        { type: "p", text: "Variables declared with let and const are hoisted but not initialized. Accessing them before their declaration results in a ReferenceError." },
        { type: "code", text: "console.log(b); // ReferenceError\nlet b = 20;" },
        { type: "p", text: "Understanding execution contexts, hoisting, and the TDZ is crucial for writing predictable and bug-free JavaScript code. It explains why variables and functions behave differently depending on where and how they are declared." }
      ]
    },
    {
      id: "p9",
      cover: "linear-gradient(135deg, #ffe1d0 0%, #aebf92 55%, #56633f 100%)",
      category: "Node.js",
      date: "Medium",
      readTime: "4 min read",
      title: "Callbacks in Node.js",
      excerpt:
        "Callbacks are how Node.js does async without blocking — until they're nested three levels deep and you're staring at the Pyramid of Doom. Here's the pattern, the pitfall, and the way out.",
      body: [
        { type: "p", text: "In Node.js, a callback is a function passed as an argument to another function, executed once that function completes its operation. Callbacks are central to Node.js, enabling asynchronous programming for tasks like reading files, making HTTP requests, or querying databases." },
        { type: "h3", text: "How callbacks work in Node.js" },
        { type: "h3", text: "Asynchronous execution" },
        { type: "p", text: "Callbacks allow Node.js to perform non-blocking operations. While an operation (e.g., reading a file) is in progress, the rest of the code continues executing. Once the operation completes, the callback is invoked to handle the result." },
        { type: "h3", text: "Error handling" },
        { type: "p", text: "Node.js callbacks often follow the error-first pattern, where the first argument is reserved for an error (if any), and the second is the result. This allows errors to be handled immediately within the callback:" },
        { type: "code", text: "fs.readFile('file.txt', (err, data) => {\n  if (err) {\n    console.error('Error reading file:', err);\n  } else {\n    console.log('File contents:', data.toString());\n  }\n});" },
        { type: "h3", text: "Callback hell" },
        { type: "p", text: "When multiple asynchronous operations are performed in sequence, callbacks can become nested, resulting in callback hell (also called the Pyramid of Doom). This makes code harder to read, debug, and maintain." },
        { type: "p", text: "Example of callback hell:" },
        { type: "code", text: "fs.readFile('file1.txt', (err, data1) => {\n  if (err) throw err;\n  fs.readFile('file2.txt', (err, data2) => {\n    if (err) throw err;\n    fs.readFile('file3.txt', (err, data3) => {\n      if (err) throw err;\n      // Continue nesting...\n    });\n  });\n});" },
        { type: "h3", text: "Mitigating callback hell" },
        { type: "ul", items: [
          "Modular code: break your code into smaller, reusable functions to reduce nesting.",
          "Promises & async/await: these modern approaches flatten asynchronous code, making it cleaner and easier to maintain."
        ] },
        { type: "h3", text: "Passing functions as callbacks" },
        { type: "p", text: "JavaScript treats functions as first-class citizens, meaning they can be passed as arguments to other functions. This is the core concept behind callbacks." },
        { type: "p", text: "Example:" },
        { type: "code", text: "function fetchData(callback) {\n  setTimeout(() => {\n    const data = 'Some data';\n    callback(null, data); // No error, first argument is null\n  }, 1000);\n}\n\nfetchData((err, result) => {\n  if (err) {\n    console.error(err);\n  } else {\n    console.log(result); // 'Some data'\n  }\n});" },
        { type: "h3", text: "Benefits of callbacks" },
        { type: "ul", items: [
          "Flexibility: different functions can be passed as callbacks to customize behavior.",
          "Reusability: the same function can be reused in different contexts.",
          "Control flow: callbacks help chain asynchronous operations and handle errors immediately."
        ] },
        { type: "p", text: "Callbacks remain foundational in Node.js, providing the building blocks for asynchronous programming. Understanding how to use and manage callbacks effectively is key to writing clean, maintainable Node.js code." }
      ]
    },
    {
      id: "p10",
      cover: "linear-gradient(135deg, #ccdbb2 0%, #d67f48 55%, #643312 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "4 min read",
      title: "Promises in JavaScript",
      excerpt:
        "Promises turned tangled callback chains into readable .then()/.catch() flows — and Promise.all, race, and any give you real control over concurrency. Here's the full picture.",
      body: [
        { type: "p", text: "In JavaScript, a Promise is an object that represents the eventual completion — or failure — of an asynchronous operation and its resulting value. Promises provide a cleaner, more structured way to handle asynchronous code, helping developers avoid the infamous \"callback hell.\"" },
        { type: "h3", text: "Key characteristics of a Promise" },
        { type: "p", text: "A Promise has three states:" },
        { type: "ul", items: [
          "Pending — the initial state; the operation is still ongoing.",
          "Fulfilled — the operation completed successfully, providing a resulting value.",
          "Rejected — the operation failed, providing a reason (an error)."
        ] },
        { type: "h3", text: "Creating a Promise" },
        { type: "p", text: "You create a Promise using the new Promise() constructor, which takes a function with two parameters: resolve and reject." },
        { type: "ul", items: [
          "resolve: called when the operation succeeds, transitioning the Promise from pending to fulfilled.",
          "reject: called when the operation fails, transitioning the Promise from pending to rejected."
        ] },
        { type: "code", text: "function fetchData() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const success = true;\n      if (success) {\n        resolve('Data fetched successfully!');\n      } else {\n        reject('Failed to fetch data.');\n      }\n    }, 1000);\n  });\n}\n\nfetchData()\n  .then(result => console.log(result))   // 'Data fetched successfully!'\n  .catch(error => console.error(error)); // 'Failed to fetch data.'" },
        { type: "p", text: "In this example, fetchData() returns a Promise. After one second, it either resolves or rejects, and we handle the outcome with .then() and .catch()." },
        { type: "h3", text: "Chaining Promises" },
        { type: "p", text: "Promises can be chained together to handle sequences of asynchronous operations in a readable way:" },
        { type: "code", text: "fetchData()\n  .then(result => {\n    console.log(result);\n    return anotherAsyncOperation();\n  })\n  .then(nextResult => console.log(nextResult))\n  .catch(error => console.error(error));" },
        { type: "h3", text: "Promise methods for concurrency" },
        { type: "p", text: "JavaScript provides several methods to handle multiple Promises efficiently:" },
        { type: "ul", items: [
          "Promise.all(): accepts an array of Promises and resolves when all are fulfilled. If any reject, it immediately rejects.",
          "Promise.allSettled(): resolves when all Promises settle, regardless of fulfillment or rejection.",
          "Promise.race(): resolves or rejects as soon as the first Promise settles.",
          "Promise.any(): resolves as soon as any Promise fulfills. Rejects only if all Promises reject, returning an AggregateError."
        ] },
        { type: "p", text: "These methods are especially useful in Node.js for managing asynchronous operations like file system tasks, database queries, or HTTP requests." },
        { type: "h3", text: "Why Promises matter in Node.js" },
        { type: "ul", items: [
          "Cleaner asynchronous code: Promises make asynchronous flows more readable and manageable.",
          "Better error handling: .catch() simplifies managing rejected Promises compared to nested callbacks.",
          "Concurrency management: methods like Promise.all() and Promise.race() allow multiple async operations to run concurrently, improving performance."
        ] },
        { type: "p", text: "By using Promises effectively, Node.js developers can write more maintainable, efficient, and robust asynchronous code, avoiding nested callbacks while maintaining clear control over operation flow and error handling." }
      ]
    },
    {
      id: "p11",
      cover: "linear-gradient(135deg, #e1eecc 0%, #b2622d 55%, #3d472b 100%)",
      category: "Node.js",
      date: "Medium",
      readTime: "3 min read",
      title: "How Node.js Handles Multi-Threading",
      excerpt:
        "Node.js is single-threaded by design — but Libuv's thread pool, worker_threads, and the cluster module all give you real concurrency when you need it. Here's how each one fits.",
      body: [
        { type: "p", text: "The shift from single-threaded to multi-threaded in Node.js involves leveraging certain features and modules. Here are the main approaches." },
        { type: "h3", text: "1. Libuv and the thread pool" },
        { type: "p", text: "Node.js uses Libuv, an underlying library that handles asynchronous I/O operations. By default, Node.js maintains a thread pool (typically 4 threads) to manage tasks such as:" },
        { type: "ul", items: [
          "File system operations",
          "DNS lookups",
          "Other non-blocking I/O tasks"
        ] },
        { type: "p", text: "This allows Node.js to perform multiple operations concurrently without blocking the main event loop." },
        { type: "h3", text: "2. Worker threads" },
        { type: "p", text: "Introduced in Node.js v10.5.0, the worker threads module enables true multi-threading. Key points include:" },
        { type: "ul", items: [
          "Worker threads run in parallel, ideal for CPU-intensive tasks that could block the event loop.",
          "You can spawn multiple workers, which communicate via message passing for parallel computation."
        ] },
        { type: "p", text: "This approach is especially useful when heavy computation is required without affecting the responsiveness of your application." },
        { type: "h3", text: "3. Cluster module" },
        { type: "p", text: "The cluster module allows you to create multiple instances of your Node.js application, each running on its own thread." },
        { type: "ul", items: [
          "This is great for utilizing multi-core systems.",
          "A master process can spawn multiple worker processes, distributing incoming requests among them efficiently."
        ] },
        { type: "h3", text: "4. Using external libraries" },
        { type: "p", text: "Several libraries can help manage multi-threading, clustering, and load balancing, including:" },
        { type: "ul", items: [
          "pm2 — process management and clustering",
          "Bull — task queues for background jobs",
          "Bunyan — logging and monitoring for scalable apps"
        ] },
        { type: "p", text: "By using these methods, Node.js applications can handle multiple tasks concurrently and improve performance, especially for CPU-bound operations." }
      ]
    },
    {
      id: "p12",
      cover: "linear-gradient(135deg, #ffc6a5 0%, #728157 55%, #272e1b 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "3 min read",
      title: "JavaScript and Asynchronous Execution",
      excerpt:
        "JavaScript runs on one thread, but the event loop is what makes it feel asynchronous — call stack, microtask queue, macrotask queue, and the priority order that ties them together.",
      body: [
        { type: "p", text: "JavaScript is fundamentally single-threaded, meaning it runs on a single main thread. However, through Node.js, we can handle asynchronous operations efficiently, effectively making JavaScript asynchronous. This is achieved through mechanisms like the event loop and the libuv library, which allows us to perform non-blocking I/O operations." },
        { type: "h3", text: "The event loop" },
        { type: "p", text: "The event loop is the core of asynchronous behavior in Node.js. Even though JavaScript runs on a single thread, the event loop helps manage multiple asynchronous tasks by using different types of queues." },
        { type: "h3", text: "How the event loop works" },
        { type: "h3", text: "1. Call stack" },
        { type: "p", text: "This is where the synchronous code is executed. Whenever a function is called, it gets pushed onto the call stack, and when it returns, it's popped off." },
        { type: "h3", text: "2. Queues" },
        { type: "p", text: "There are different queues that the event loop uses to manage asynchronous operations:" },
        { type: "ul", items: [
          "Microtask queue: this includes tasks like Promise callbacks and process.nextTick() functions. Microtasks have higher priority and are executed immediately after the current synchronous code and before the next macrotask.",
          "Macrotask queue: this includes tasks like setTimeout, setInterval, and I/O operations. Macrotasks are processed after all the microtasks are completed."
        ] },
        { type: "h3", text: "3. Event loop cycle" },
        { type: "p", text: "The event loop continuously cycles through the following steps:" },
        { type: "ul", items: [
          "It checks the call stack and executes any synchronous code.",
          "Once the call stack is empty, it processes all the microtasks in the microtask queue.",
          "After the microtasks are done, it picks up the next macrotask from the macrotask queue."
        ] },
        { type: "p", text: "Priority: microtasks always have a higher priority compared to macrotasks. This ensures that promises and other microtasks are handled promptly." },
        { type: "h3", text: "In summary" },
        { type: "ul", items: [
          "JavaScript: single-threaded by nature.",
          "Node.js: introduces asynchronous capabilities using the event loop.",
          "Event loop: manages execution by prioritizing microtasks over macrotasks and ensuring non-blocking I/O."
        ] }
      ]
    },
    {
      id: "p13",
      cover: "linear-gradient(135deg, #fff2eb 0%, #8fa073 55%, #402310 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "3 min read",
      title: "Mutable vs Immutable in JavaScript",
      excerpt:
        "Some JavaScript values change in place, others don't — and knowing which is which explains a whole category of 'why did that side effect happen' bugs. Here's the mutable/immutable split, with examples.",
      body: [
        { type: "p", text: "Understanding mutability is essential for writing predictable and maintainable JavaScript code. Some objects can be changed after creation (mutable), while others cannot (immutable)." },
        { type: "h3", text: "1. Mutable" },
        { type: "p", text: "Definition: mutable objects can be modified after they are created." },
        { type: "p", text: "Examples: Array, Object, Map, Set (their elements or properties can change)." },
        { type: "p", text: "Characteristics:" },
        { type: "ul", items: [
          "You can update properties or elements without creating a new object.",
          "Changes affect all references to that object, which can lead to unexpected side effects."
        ] },
        { type: "code", text: "let arr = [1, 2, 3];\narr.push(4); // modifies the original array\nconsole.log(arr); // [1, 2, 3, 4]\n\nlet obj = { name: 'Saran' };\nobj.name = 'Sharon'; // modifies the original object\nconsole.log(obj); // { name: 'Sharon' }" },
        { type: "p", text: "Implication: be cautious when multiple parts of your program reference the same mutable object, as changes in one place can affect others." },
        { type: "h3", text: "2. Immutable" },
        { type: "p", text: "Definition: immutable objects cannot be changed once they are created." },
        { type: "p", text: "Examples: String, Number, Boolean, BigInt, Symbol." },
        { type: "p", text: "Characteristics:" },
        { type: "ul", items: [
          "Any modification creates a new object/value instead of altering the original.",
          "Helps prevent side effects and makes programs easier to reason about."
        ] },
        { type: "code", text: "let str = \"Hello\";\nlet newStr = str.toUpperCase(); // creates a new string\n\nconsole.log(str);    // \"Hello\" (original remains unchanged)\nconsole.log(newStr); // \"HELLO\"" },
        { type: "p", text: "Implication: using immutable values improves code reliability and predictability, especially in functional programming patterns." },
        { type: "h3", text: "Quick reference" },
        {
          type: "table",
          headers: ["", "Mutable", "Immutable"],
          rows: [
            ["Can change after creation?", "Yes", "No"],
            ["Examples", "Array, Object, Map, Set", "String, Number, Boolean"],
            ["Modifications", "Affect the original object", "Create a new object/value"],
            ["Side effects", "Possible if referenced elsewhere", "Minimal or none"]
          ]
        },
        { type: "h3", text: "Interview tip" },
        { type: "p", text: "Mention that immutability promotes predictable code and prevents unintended side effects, while mutability allows efficient updates when necessary." }
      ]
    },
    {
      id: "p14",
      cover: "linear-gradient(135deg, #e1eecc 0%, #f6a06b 55%, #643312 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "4 min read",
      title: "Differences Between var, let, and const in JavaScript",
      excerpt:
        "var, let, and const look interchangeable until scope, hoisting, and re-declaration rules bite you. Here's the full breakdown — plus the one gotcha with const and mutable objects.",
      body: [
        { type: "p", text: "Choosing the right variable declaration in JavaScript is crucial for writing clean, predictable, and bug-free code. JavaScript provides three ways to declare variables: var, let, and const. Each has distinct characteristics that affect scope, hoisting, and re-declaration rules." },
        { type: "h3", text: "1. var" },
        { type: "p", text: "Scope: function-scoped. A variable declared with var inside a function is only accessible within that function. Declared outside a function, it's globally accessible." },
        { type: "p", text: "Hoisting: var variables are hoisted to the top of their scope and initialized with undefined. This means you can reference them before the declaration, but their value will be undefined." },
        { type: "p", text: "Re-declaration: allowed within the same scope." },
        { type: "code", text: "console.log(a); // undefined\nvar a = 10;\nvar a = 20; // No error\nconsole.log(a); // 20" },
        { type: "h3", text: "2. let" },
        { type: "p", text: "Scope: block-scoped. Accessible only within the block where it's defined (e.g., loops, if statements)." },
        { type: "p", text: "Hoisting: hoisted to the top of the block but in the Temporal Dead Zone (TDZ) until the declaration is encountered. Accessing it before declaration throws a ReferenceError." },
        { type: "p", text: "Re-declaration: not allowed in the same scope, preventing accidental overwrites." },
        { type: "code", text: "console.log(b); // ReferenceError\nlet b = 10;\nlet b = 20; // Error: Identifier 'b' has already been declared" },
        { type: "h3", text: "3. const" },
        { type: "p", text: "Scope: block-scoped, similar to let." },
        { type: "p", text: "Hoisting: hoisted to the top of the block and also in the TDZ until the declaration is encountered. Accessing it before declaration throws a ReferenceError." },
        { type: "p", text: "Immutability: must be initialized at the time of declaration and cannot be reassigned. However, if it holds an object or array, the contents can be modified." },
        { type: "p", text: "Re-declaration: not allowed within the same scope." },
        { type: "code", text: "const c = 10;\nc = 20; // Error: Assignment to constant variable\n\nconst arr = [1, 2, 3];\narr.push(4); // Allowed\nconsole.log(arr); // [1, 2, 3, 4]" },
        { type: "h3", text: "Summary of var, let, and const" },
        {
          type: "table",
          headers: ["", "var", "let", "const"],
          rows: [
            ["Scope", "Function", "Block", "Block"],
            ["Hoisted?", "Yes, initialized with undefined", "Yes, but in the TDZ until declaration", "Yes, but in the TDZ until declaration"],
            ["Re-declaration", "Yes", "No", "No"],
            ["Reassignment", "Yes", "Yes", "No"]
          ]
        },
        { type: "p", text: "By understanding these differences, you can choose the appropriate variable declaration for your code, ensuring it is cleaner, safer, and more maintainable in both JavaScript and Node.js applications." }
      ]
    },
    {
      id: "p15",
      cover: "linear-gradient(135deg, #fff2eb 0%, #aebf92 55%, #56633f 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "4 min read",
      title: "Async/Await in JavaScript",
      excerpt:
        "async/await turns Promise chains into code that reads top-to-bottom — plus try/catch for errors and Promise.all when you actually want things running in parallel.",
      body: [
        { type: "p", text: "Asynchronous programming is a core part of JavaScript, but managing asynchronous operations used to be challenging. Before async/await, developers relied on callbacks or Promise chains, which could quickly become messy and hard to follow. The introduction of async/await provides a cleaner, more readable way to write asynchronous code, making it behave more like synchronous code." },
        { type: "h3", text: "The async keyword" },
        { type: "p", text: "When you declare a function with the async keyword, it automatically returns a Promise. This makes it easier to work with asynchronous results without manually creating Promises." },
        { type: "code", text: "async function example() {\n  return 'Hello World';\n}" },
        { type: "p", text: "Calling example() returns a Promise that resolves with 'Hello World'." },
        { type: "h3", text: "The await keyword" },
        { type: "p", text: "The await keyword can only be used inside an async function. It pauses the function execution until the Promise settles (either resolved or rejected). This makes asynchronous code easier to read and reason about." },
        { type: "code", text: "async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  return data;\n}" },
        { type: "p", text: "Here, await pauses fetchData until the fetch operation completes, and then waits for the JSON parsing to finish." },
        { type: "h3", text: "Error handling" },
        { type: "p", text: "With async/await, error handling becomes straightforward using try/catch blocks. Any rejected Promise inside the async function triggers the catch block." },
        { type: "code", text: "async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error fetching data:', error);\n    throw error;\n  }\n}" },
        { type: "h3", text: "Sequential vs. parallel execution" },
        { type: "p", text: "Sequential execution: using await for multiple Promises one after another waits for each Promise to resolve before moving on." },
        { type: "code", text: "const result1 = await task1();\nconst result2 = await task2();" },
        { type: "p", text: "Parallel execution: use Promise.all() to run multiple Promises concurrently and await their combined results." },
        { type: "code", text: "const [result1, result2] = await Promise.all([task1(), task2()]);" },
        { type: "p", text: "Parallel execution is more efficient when the tasks are independent and don't need to wait for each other." },
        { type: "h3", text: "Why async/await matters" },
        { type: "ul", items: [
          "Readability: makes asynchronous code look like synchronous code.",
          "Error handling: simple and predictable with try/catch.",
          "Control: easily manage sequential and parallel operations.",
          "Maintainability: reduces callback hell and deeply nested Promises."
        ] },
        { type: "p", text: "Using async/await in your JavaScript applications not only improves code clarity but also enhances the maintainability of complex asynchronous workflows. By understanding how to use async and await effectively, you can write cleaner, more reliable, and more efficient code." }
      ]
    },
    {
      id: "p16",
      cover: "linear-gradient(135deg, #ffe1d0 0%, #728157 55%, #272e1b 100%)",
      category: "Databases",
      date: "Medium",
      readTime: "5 min read",
      title: "SQL vs NoSQL: The Key Differences",
      excerpt:
        "SQL and NoSQL solve different problems — schema rigidity vs flexibility, vertical vs horizontal scaling, ACID vs BASE. Here's how to actually decide between them.",
      body: [
        { type: "p", text: "When it comes to choosing a database for your application, one of the most common questions developers face is: SQL or NoSQL?" },
        { type: "p", text: "Both have their strengths, and the right choice depends on your project's data structure, scalability needs, and consistency requirements. Let's break down the key differences between them in a simple and practical way." },
        { type: "h3", text: "What is SQL?" },
        { type: "p", text: "SQL (Structured Query Language) databases are relational, meaning they store data in tables made up of rows and columns. Each table has a predefined schema, and relationships between tables are maintained using keys." },
        { type: "p", text: "Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server." },
        { type: "p", text: "SQL databases are great for structured data and complex queries — perfect for financial systems, ERP solutions, and traditional web applications that demand strong data consistency." },
        { type: "h3", text: "What is NoSQL?" },
        { type: "p", text: "NoSQL (Not Only SQL) databases are non-relational and designed to handle unstructured, semi-structured, or rapidly changing data. They allow flexible schemas, making it easy to adapt as your application evolves." },
        { type: "p", text: "Examples: MongoDB, Redis, Cassandra, DynamoDB, CouchDB." },
        { type: "p", text: "NoSQL databases excel in high-volume, real-time, or distributed systems like social networks, IoT platforms, and big data analytics." },
        { type: "h3", text: "Data structure difference" },
        { type: "ul", items: [
          "SQL: data is stored in structured tables (rows and columns).",
          "NoSQL: data is stored in flexible formats such as documents, key-value pairs, wide columns, or graphs."
        ] },
        { type: "p", text: "SQL requires a fixed schema before you can insert data, while NoSQL offers a dynamic schema, allowing different records to have different structures." },
        { type: "h3", text: "Query language" },
        { type: "p", text: "SQL databases use the Structured Query Language (SQL) to define and manipulate data. Example:" },
        { type: "code", text: "SELECT * FROM users WHERE age > 25;" },
        { type: "p", text: "NoSQL databases each have their own query model. For instance, MongoDB uses JSON-like syntax:" },
        { type: "code", text: "db.users.find({ age: { $gt: 25 } });" },
        { type: "h3", text: "Scalability" },
        { type: "ul", items: [
          "SQL: scales vertically — you increase capacity by adding more power (CPU or RAM) to a single server.",
          "NoSQL: scales horizontally — you can add more servers to distribute the load across a cluster."
        ] },
        { type: "p", text: "This makes NoSQL databases a better choice for large-scale, high-traffic applications that demand performance across multiple servers." },
        { type: "h3", text: "Transactions and consistency" },
        { type: "p", text: "SQL databases follow ACID properties — Atomicity, Consistency, Isolation, and Durability. This ensures reliable and predictable transactions." },
        { type: "p", text: "NoSQL databases often follow BASE principles — Basically Available, Soft state, and Eventually consistent. They prioritize performance and availability over strict consistency." },
        { type: "h3", text: "When to use SQL vs NoSQL" },
        { type: "p", text: "You should choose SQL when:" },
        { type: "ul", items: [
          "Your data is structured and consistent.",
          "Relationships between entities are important.",
          "You need complex joins and transactions.",
          "The system requires strong consistency (e.g., banking apps)."
        ] },
        { type: "p", text: "You should choose NoSQL when:" },
        { type: "ul", items: [
          "Your data structure changes frequently.",
          "You need to handle massive amounts of data.",
          "You want high scalability and speed.",
          "You're building real-time or distributed systems (e.g., social media, IoT)."
        ] },
        { type: "h3", text: "Final thoughts" },
        { type: "p", text: "In short:" },
        { type: "ul", items: [
          "Choose SQL for structured, relational, and consistent data.",
          "Choose NoSQL for scalability, flexibility, and fast-evolving datasets."
        ] },
        { type: "p", text: "In modern development, many companies use both, combining the stability of SQL with the flexibility of NoSQL to get the best of both worlds." }
      ]
    },
    {
      id: "p17",
      cover: "linear-gradient(135deg, #ffc6a5 0%, #8c491a 55%, #402310 100%)",
      category: "Node.js",
      date: "Medium",
      readTime: "5 min read",
      title: "Express.js vs Nest.js: Which One Should You Choose for Your Next Backend Project?",
      excerpt:
        "Express gives you a blank canvas; Nest gives you a blueprint. Here's how the two most popular Node.js frameworks differ in architecture, language, and when each one actually wins.",
      body: [
        { type: "p", text: "When building a backend application with Node.js, two popular frameworks often come up: Express.js and Nest.js. Both are powerful and widely used — but they serve slightly different purposes." },
        { type: "p", text: "If you're trying to decide which one to use, this guide breaks down the key differences and helps you pick the right one for your project." },
        { type: "h3", text: "What is Express.js?" },
        { type: "p", text: "Express.js is a minimal and unopinionated web framework for Node.js. It provides the core features for building APIs and web applications, but leaves the architectural decisions up to you." },
        { type: "p", text: "Think of Express as a lightweight foundation — you decide how to organize routes, middleware, and business logic." },
        { type: "p", text: "Key highlights:" },
        { type: "ul", items: [
          "Minimal and flexible framework.",
          "Excellent performance and simplicity.",
          "Huge ecosystem and community support.",
          "Perfect for small to medium projects or developers who prefer full control."
        ] },
        { type: "p", text: "Example (Express route):" },
        { type: "code", text: "const express = require('express');\nconst app = express();\n\napp.get('/users', (req, res) => {\n  res.send('All Users');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));" },
        { type: "h3", text: "What is Nest.js?" },
        { type: "p", text: "Nest.js is a progressive, opinionated framework built on top of Express (or optionally Fastify). It's inspired by Angular's architecture and provides a highly structured way to build scalable and maintainable server-side applications." },
        { type: "p", text: "It uses TypeScript by default and encourages the use of decorators, modules, and dependency injection to keep your code organized and testable." },
        { type: "p", text: "Key highlights:" },
        { type: "ul", items: [
          "Built with TypeScript (but supports JavaScript).",
          "Modular and structured architecture.",
          "Built-in support for dependency injection.",
          "Ideal for large-scale enterprise applications.",
          "Integrates easily with tools like GraphQL, WebSockets, and Microservices."
        ] },
        { type: "p", text: "Example (Nest controller):" },
        { type: "code", text: "import { Controller, Get } from '@nestjs/common';\n\n@Controller('users')\nexport class UsersController {\n  @Get()\n  getAllUsers() {\n    return 'All Users';\n  }\n}" },
        { type: "h3", text: "Core differences between Express and Nest" },
        {
          type: "table",
          headers: ["", "Express.js", "Nest.js"],
          rows: [
            ["Architecture", "No fixed structure — you design folders, layers, and logic however you like.", "Enforces a modular, layered architecture (controllers, services, modules)."],
            ["Language", "JavaScript by default; TypeScript needs manual setup.", "TypeScript-first, with strong typing and better DX."],
            ["Learning curve", "Easier to start for beginners.", "Steeper, due to decorators, dependency injection, and modular concepts."],
            ["Scalability", "Scales manually; large codebases can get messy.", "Built for scalability — suited to complex applications and teams."],
            ["Performance", "Similar to Nest — Nest runs on Express/Fastify internally.", "Similar to Express — the difference is structure, not raw speed."]
          ]
        },
        { type: "h3", text: "When to use each" },
        { type: "p", text: "Use Express.js when:" },
        { type: "ul", items: [
          "You're building a small or medium-sized application.",
          "You want full control over your architecture.",
          "You prefer JavaScript simplicity.",
          "You're developing quick prototypes or REST APIs."
        ] },
        { type: "p", text: "Use Nest.js when:" },
        { type: "ul", items: [
          "You're working on a large or enterprise-grade project.",
          "You prefer TypeScript and clean architecture.",
          "You need maintainability, scalability, and testability.",
          "You want built-in support for features like GraphQL, microservices, and dependency injection."
        ] },
        { type: "h3", text: "Developer analogy" },
        { type: "p", text: "Express is like building with LEGO bricks — simple, flexible, and fast, but you decide how to assemble it." },
        { type: "p", text: "Nest is like using a blueprint — it gives you a ready-made structure to build scalable applications without reinventing the wheel." },
        { type: "h3", text: "Final thoughts" },
        { type: "p", text: "Both Express and Nest are excellent choices. If you love simplicity and freedom, go with Express.js. If you prefer structure, scalability, and long-term maintainability, choose Nest.js." },
        { type: "p", text: "At the end of the day, Nest.js is essentially \"Express with superpowers.\"" }
      ]
    },
    {
      id: "p18",
      cover: "linear-gradient(135deg, #ccdbb2 0%, #643312 55%, #272e1b 100%)",
      category: "JavaScript",
      date: "Medium",
      readTime: "4 min read",
      title: "Event Loop in JavaScript",
      excerpt:
        "The event loop is JavaScript's heartbeat — call stack, heap, microtask queue, and macrotask queue working together to make single-threaded code feel concurrent.",
      body: [
        { type: "p", text: "The event loop is the heartbeat of JavaScript, enabling asynchronous, non-blocking behavior despite JavaScript being single-threaded. It allows JavaScript to handle multiple operations concurrently, without waiting for one to finish before starting another. Understanding the event loop is crucial for writing efficient, responsive applications in both browsers and Node.js." },
        { type: "h3", text: "How the event loop works" },
        { type: "h3", text: "1. Call stack" },
        { type: "p", text: "The call stack keeps track of function calls. When a function is invoked, it's pushed onto the stack. Once the function finishes, it's popped off. The call stack handles synchronous code execution." },
        { type: "h3", text: "2. Heap" },
        { type: "p", text: "The heap is where objects and variables are stored in memory. While the event loop doesn't manage it directly, the heap works alongside it to support program execution." },
        { type: "h3", text: "3. Microtask queue" },
        { type: "p", text: "The microtask queue holds microtasks, such as:" },
        { type: "ul", items: [
          "Promise .then() callbacks",
          "async/await continuations"
        ] },
        { type: "p", text: "Microtasks have a higher priority than macrotasks and are executed before moving to the next macrotask." },
        { type: "h3", text: "4. Macrotask queue" },
        { type: "p", text: "When the call stack is empty, the event loop picks the first callback from the queue and pushes it onto the call stack for execution. Tasks like setTimeout and setInterval are placed here." },
        { type: "h3", text: "Event loop cycle" },
        { type: "p", text: "The event loop continuously follows this cycle:" },
        { type: "ul", items: [
          "Check if the call stack is empty.",
          "Process all tasks in the microtask queue.",
          "Process the next task from the macrotask queue (event queue).",
          "Repeat indefinitely."
        ] },
        { type: "p", text: "This cycle ensures smooth execution of asynchronous operations while keeping the main thread free." },
        { type: "h3", text: "Priority order of execution" },
        { type: "ul", items: [
          "Microtasks (e.g., Promises, async/await) — executed first when the call stack is empty.",
          "Macrotasks (e.g., setTimeout, setInterval) — executed after microtasks.",
          "Event queue callbacks — handled in order after microtasks and macrotasks."
        ] },
        { type: "h3", text: "Benefits of the event loop" },
        { type: "ul", items: [
          "Non-blocking I/O: enables concurrent operations without blocking the main thread.",
          "Responsiveness: long-running tasks don't freeze the application.",
          "Efficiency: supports a large number of simultaneous connections, ideal for real-time apps like chat servers or APIs."
        ] },
        { type: "h3", text: "Putting it all together" },
        { type: "p", text: "The event loop is at the heart of JavaScript's asynchronous model. It continuously checks the call stack, microtask queue, and macrotask queue to ensure that both synchronous and asynchronous code executes efficiently. Understanding the event loop also lays the foundation for grasping related concepts like hoisting and the temporal dead zone, which define how variables and functions behave during execution." }
      ]
    },
    {
      id: "p19",
      cover: "linear-gradient(135deg, #fff2eb 0%, #f6a06b 55%, #56633f 100%)",
      category: "Node.js",
      date: "Medium",
      readTime: "2 min read",
      title: "What & Why Node.js",
      excerpt:
        "Node.js runs JavaScript outside the browser on V8, and its non-blocking, event-driven core is why it can handle massive concurrency on a single thread. Here's the short version of what it is and why it matters.",
      body: [
        { type: "h3", text: "What is Node.js?" },
        { type: "p", text: "Node.js is a runtime environment that allows you to run JavaScript on the server side. It's built on the V8 JavaScript engine (the same engine that powers Google Chrome), which makes it fast and efficient." },
        { type: "h3", text: "Key features" },
        { type: "ul", items: [
          "Asynchronous and event-driven: Node.js uses non-blocking, event-driven architecture, which means it can handle multiple operations simultaneously without waiting for one to complete before moving on.",
          "Single-threaded with event loop: while JavaScript is single-threaded, Node.js uses an event loop and background workers (via libuv) to handle asynchronous tasks, making it capable of handling many connections at once.",
          "NPM (Node Package Manager): Node.js comes with NPM, a vast ecosystem of libraries and tools, making it easy to add functionality and scale applications quickly.",
          "Cross-platform: Node.js runs on various platforms, including Windows, macOS, and Linux, making it highly versatile."
        ] },
        { type: "h3", text: "Why use Node.js?" },
        { type: "ul", items: [
          "Performance: due to its non-blocking nature, Node.js can handle a large number of concurrent connections with high throughput.",
          "Scalability: it's easy to build scalable network applications, making it ideal for real-time apps like chat applications or streaming services.",
          "JavaScript everywhere: using JavaScript on both the client and the server simplifies development and allows for shared code."
        ] }
      ]
    }
  ];
})();
