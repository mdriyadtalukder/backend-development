const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello,im server");
});

app.get("/products", (req, res) => {
  const products = [
    {
      name: "product1",
      id: 1,
    },
    {
      name: "product2",
      id: 2,
    },
    {
      name: "product3",
      id: 3,
    },
    {
      name: "product4",
      id: 4,
    },
    {
      name: "product5",
      id: 5,
    },
  ];

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      name: "product1",
      id: 1,
    },
    {
      name: "product2",
      id: 2,
    },
    {
      name: "product3",
      id: 3,
    },
    {
      name: "product4",
      id: 4,
    },
    {
      name: "product5",
      id: 5,
    },
  ];

  const pid = products.find((f) => f.id === productId);
  if (pid) {
    res.json(pid);
  } else {
    res.status(400).send("something went wrong");
  }
});

app.listen(4000, () => {
  console.log("my server is running on port 4000");
});
