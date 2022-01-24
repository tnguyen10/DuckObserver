const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { MongoClient } = require("mongodb");

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

let database = null;
const MONGODB_URL = "mongodb://127.0.0.1:27017"
const MONGODB_COLLECTION = "DUCK_OBSERVER"

async function connectToDatabase() {
  const mongoDBURL = MONGODB_URL;
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });
  database = connection.db();
}

app.post("/", async (req, res) => {
  const data = req.body;
  data && (await database.collection(MONGODB_COLLECTION).insertOne(data));
  res.send({ status: "200", message: "Send success" });
});

app.get("/", async (req, res) => {
  const data = await database.collection(MONGODB_COLLECTION).find({}).toArray();
  res.send({ status: "200", message: "Request success", data: data });
});

connectToDatabase().then(async () => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
