const express = require("express");
const app = express();
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 2007;

app.use(express.json());



//* --------------testing apis

app.get("/", (req, res) => {
    res.send("thunder knight edutech connect server running");
});

app.get("/api/test", (req, res) => {
    res.send({ test: "testing", code: 500 });
});


//* ---------------- create jwt token and send to client side


app.post("/jwt", (req, res) => {
    try {
        const user = req.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "90d",
        });
        res.send({ token });
    } catch (error) {
        res.status(500).send({error: true, errorMessage: "something wrong!!"})
    }
});




//* -----------------------verify the jwt token middleware 

const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(401).send({ error: true, errorMessage: "unauthorized access" });
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
        if (error) return res.status(403).send({ error: true, errorMessage: "forbidden access" });
    })
    req.decoded = decoded;
    next();
}




//* ----------------------- mongodb uri

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

//* -----------------------  create collections
        const usersCollection = client.db("EdutechConnect").collection("users");


//* ----------------------- Verify Admin MiddleWare ------------------------
        const verifyADMIN = async (req, res, next) => {
            try {
                const email = req.decoded.email;
                const query = { email: email };
                const user = await usersCollection.findOne(query);
    
                if (user?.role !== 'admin') {
                    return res.status(403).send({ error: true, errorMessage: 'forbidden Access' });
                }
                next();
            } catch (error) {
                return res.status(403).send({ error: true, errorMessage: 'forbidden Access' });
            }
        }


//! ----------------------- Verify Instrucor middleware (if instror route create on client side otherwise this is option) ------------------------
        const verifyINSTRUCTOR = async (req, res, next) => {
            try {
                const email = req.decoded.email;
                const query = { email: email };
                const user = await usersCollection.findOne(query);
    
                if (user?.role !== 'instructor') {
                    return res.status(403).send({ error: true, errorMessage: 'forbidden Access' });
                }
                next();
            } catch (error) {
                return res.status(403).send({ error: true, errorMessage: 'forbidden Access' });
            }
        }





//* ----------------------- Users apis start ------------------------

//* store users details in mongodb if exist update user or not exist insert user

        app.put("/api/users/:email", async (req, res) => {
            try {
                const email = req.params.email;
                const user = user.body;
                const query = { email: email };
                const options = { upsert: true };
                const updateDoc = {
                    $set: { ...user },
                }
                const result = await usersCollection.updateOne(query, updateDoc, options);
                res.send(result);
            } catch (error) {
                res.status(500).send({error: true, errorMessage: "something wrong!!"})
            }
        })

//* get the specific logged in user details 

        app.get("/api/users/:email", verifyJWT, async (req, res) => {
            try {
                const email = req.params.email;
                const query = {email : email};
                const result = await usersCollection.findOne(query);
                res.send(result)
            } catch (error) {
                res.status(500).send({error: true, errorMessage: "something wrong!!"})
            }
        })




        //* ----------------------- Users apis End ------------------------




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
