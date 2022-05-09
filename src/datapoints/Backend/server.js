const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Always import middleware to intercept requests before reaching the callback functions to determine the type of request made
app.use(express.json());

// import json data;
const productData = require("./data");

// Start Server
app.listen(port); // listen to port
// log connected to server
console.log(`connected on port: ${port}`); //this gets printed on the console only once, and that's when the server gets running

// The callback function runs everytime a request hits the server and it matches all routes/paths. Not ideal for specific/dynamic routes
// app.use((req, res) => {
//   res.send("RES Worked");
// });

app.use(cors());

app.get("/products", (req, res) => {
  res.json(productData.products);
});
app.get("/styles", (req, res) => {
  res.json(productData.styles);
});
app.get("/products/:slug", (req, res) => {
  const { slug } = req.params;
  let result = {};
  productData.products.forEach((product) => {
    if (product.slug == slug) {
      result = product;
    }
  });
  res.json(result);
});
