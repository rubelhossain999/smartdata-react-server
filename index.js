const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


// middle ware
app.use(cors());
app.use(express.json());


// Mongodb Database Section
const uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.nqqpx5x.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {

    }
    finally { }
}
run().catch(error => console.log(error));

// Server Running Process
app.get('/', async (req, res) => {
    res.send("Hello SmartData Visitor");
});

app.listen(port, async (req, res) => {
    console.log(`This is the ${port}`);
});