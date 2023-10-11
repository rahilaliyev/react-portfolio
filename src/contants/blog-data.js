export const BLOG_DATA = [
  {
    id: 1,
    imageLink:
      'https://www.freecodecamp.org/news/content/images/2022/03/photo-1619410283995-43d9134e7656.jpeg',
    title: 'Building Modern Web Applications with React',
    content: [
      {
        header: 'What is React?',
        text: 'React is an open-source JavaScript library for building user interfaces. It was developed and is maintained by Facebook and a community of individual developers and companies. React allows you to create interactive, dynamic, and responsive user interfaces with ease. Its core philosophy revolves around the concept of components, which are self-contained building blocks that can be reused and combined to create complex UIs.',
      },
      {
        header: 'The Virtual DOM',
        text: 'One of the key innovations in React is its use of the Virtual DOM (Document Object Model). Instead of updating the actual DOM directly, React operates on a lightweight, in-memory representation of the real DOM. This Virtual DOM allows React to efficiently update only the parts of the UI that have changed, resulting in improved performance and a smoother user experience.',
      },
      {
        header: 'The Component Lifecycle',
        text: "Class components have a lifecycle that allows you to hook into various points in a component's existence, such as mounting, updating, and unmounting. This lifecycle management enables you to execute code at specific times, for example, fetching data when a component mounts or cleaning up resources when it unmounts. However, with the introduction of useEffect and other hooks in functional components, you can achieve similar functionality without using class components.",
      },
    ],
  },
  {
    id: 2,
    imageLink:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png',
    title: 'Unleashing the Power of JavaScript',
    content: [
      {
        header: 'What is JavaScript?',
        text: 'JavaScript is a versatile, high-level programming language used to create dynamic web pages and web applications. Originally designed as a scripting language for web browsers, it has since evolved into a multi-purpose language used for both client-side and server-side development.',
      },
      {
        header: 'DOM Manipulation',
        text: 'The Document Object Model (DOM) is a crucial aspect of web development. JavaScript allows developers to interact with and manipulate the DOM, enabling dynamic updates to web content without requiring a full page refresh. This capability is essential for creating responsive and user-friendly web applications.',
      },
      {
        header: 'Event Handling',
        text: 'Event handling is a fundamental part of JavaScript. With event listeners, you can respond to user interactions like clicks, keystrokes, and mouse movements. Event-driven programming is at the core of creating interactive web applications.',
      },
      {
        header: 'Asynchronous Programming',
        text: 'JavaScript excels at asynchronous programming, making it possible to perform tasks such as fetching data from servers or performing time-consuming operations without blocking the user interface. Promises and async/await are key features for managing asynchronous operations.',
      },
    ],
  },
];
