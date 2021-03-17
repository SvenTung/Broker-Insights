const express = require("express");
const ObjectId = require("mongodb").ObjectID;

const createRouter = function(collection) {
  const router = express.Router();

  //gets all clients
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  //gets the policies for a client by id
  router.get("/policies/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    collection
      .findOne({ _id: id })
      .then(docs => res.json(docs.client.policies))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  //gets client by id
  router.get("/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    collection
      .findOne({ _id: id })
      .then(docs => res.json(docs))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  //creates a client
  router.post("/", (req, res) => {
    collection
      .insertOne(req.body)
      .then(docs => res.json(docs.ops[0]))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  //updates a client
  router.put("/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    collection
      .findOneAndUpdate(
        { _id: id },
        { $set: req.body },
        { returnOriginal: false }
      )
      .then(docs => res.json(docs.value))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  //deletes a client
  router.delete("/:id", (req, res) => {
    const id = ObjectId(req.params.id);
    collection
      .deleteOne({ _id: id })
      .then(docs => res.json(docs))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      });
  });

  return router;
};
module.exports = createRouter;
