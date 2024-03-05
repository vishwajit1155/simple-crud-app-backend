require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//''middelware''
app.use(express.json()); // it allows to pass json value
app.use(express.urlencoded({ extended: false })); //it allows to pass key-value pair

//''routes''
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("hello from node API server");
});

/*########################## connecting the mongodb ##########################*/

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
