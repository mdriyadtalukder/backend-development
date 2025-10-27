function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("start");
delay(2000).then(() => console.log("promise is working"));
console.log("end");

//2 promise

function divide(n1, n2) {
  return new Promise((resolve, reject) => {
    if (n2 == 0) {
      reject("cant divide");
    } else {
      resolve(n1 / n2);
    }
  });
}

divide(4, 0)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
