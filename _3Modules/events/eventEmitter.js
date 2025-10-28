const myEmitter = require("events");
const eventEmitter = new myEmitter();

//register a listner
eventEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

//emit trigger the event
eventEmitter.emit("greet", "riyad");
