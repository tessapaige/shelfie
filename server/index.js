require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const { CONNECTION_STRING, SERVER_PORT } = process.env;
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connection established");
  })
  .catch(err => console.log(err));
// app.post("/api/product/add", controller.createProduct);
app.get("/api/inventory", controller.getProducts);
// app.put("/api/product/update", controller.updateProduct);
// app.delete("/api/product/delete/:id", controller.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
