let testName = "Aman";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

const greetingMessage = sayHello(greeting, testName);
console.log(greetingMessage); // 'hello, Aman!'
