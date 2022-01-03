const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middlewire
app.use(cors());
app.use(express.json());
// productManagement
// uojrzcONZ048CDHS
const uri =
  "mongodb+srv://productManagement:uojrzcONZ048CDHS@cluster0.ziykv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("storeProduct");
    const productCollection = database.collection("products");

    // POST APP -(create a document to insert)
    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("my crud server is running");
});
app.listen(port, () => {
  console.log("server is running on port:", port);
});
