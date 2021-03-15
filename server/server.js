const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017", (error, client) => {
  if (error) {
    console.log(error);
  }

  const db = client.db("brokerinsights");
  const clientsCollection = db.collection("clients");
  const clientsRouter = createRouter(clientCollection);
  app.use("/api/clients", clientsRouter);

  app.listen(3000, function() {
    console.log(`app listening on port ${this.address().port}`);
  });
});
