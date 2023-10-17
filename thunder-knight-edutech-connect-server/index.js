const express = require('express');
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = process.env.PORT || 2007;

app.use(express.json());




app.get("/", (req, res) => {
    res.send("thunder knight edutech connect server running");
})

app.get("/api/test", (req, res) => {
    res.send({test: "testing", code: 500});
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fhpe21r.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();











    

    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);








app.listen(port, () => {
    console.log(`edutech server running on port ${port}`);
})