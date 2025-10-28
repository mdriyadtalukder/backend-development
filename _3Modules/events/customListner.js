const myEmitter = require("events");
class MyCustomEmitter extends myEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }
  greet(name) {
    this.emit("greeting", `${this.greeting} ${name}`);
  }
}
const eventEmitter = new MyCustomEmitter();

eventEmitter.on("greeting", (message) => {
  console.log(message);
});

eventEmitter.greet("Talukder");
