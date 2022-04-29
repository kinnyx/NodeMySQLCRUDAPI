const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World");
});

const shirtRoutes = require("./src/routes/shirt.route");

app.use("/api/v1/shirt", shirtRoutes);

app.listen(port, () => {
  console.log(`express server is running at port ${port}`);
});
