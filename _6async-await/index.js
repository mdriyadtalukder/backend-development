function fn(time) {
  //dont need async coz it returns manually promise
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function timer() {
  await fn(2000);
  console.log("hi");
}
timer();

async function division(n1, n2) {
  try {
    if (n2 == 0) {
      throw new Error("cant do it");
    }
    return n1 / n2;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function name() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
}
name();
