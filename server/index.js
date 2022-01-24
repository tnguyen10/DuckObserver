const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.post("/", async (req, res) => {
  res.send({ message: "POST" });
});

app.get("/", async (req, res) =>  {
    res.send({ message: "GET" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
