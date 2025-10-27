async function showMessages() {
  console.log("1️⃣ Inside async function");

  setTimeout(() => {
    console.log("3️⃣ Inside setTimeout function");
  }, 0);

  normalFunction();
}

function normalFunction() {
  console.log("2️⃣ Inside normal function");
}

showMessages();
