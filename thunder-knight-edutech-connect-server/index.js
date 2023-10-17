const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 2007;

app.use(express.json());





app.get("/", (req, res) => {
    res.send("thunder knight edutech connect server running");
});

app.get("/api/test", (req, res) => {
    res.send({ test: "testing", code: 500 });
});

app.post("/jwt", (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "90d",
    });
    res.send({ token });
});

const VerifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;

    if(!authorization) return res.status(401).send({error: true, errorMessage: "unauthorized access"});
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
        if(error) return res.status(403).send({error: true, errorMessage: "forbidden access"});
    })
    req.decoded = decoded;
    next();
}






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fhpe21r.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();















        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`edutech server running on port ${port}`);
});
