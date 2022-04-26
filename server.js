const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require('mongodb');
const addCardHolder = require('./routes/cardCreate.routes');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/src", "/index.html"));
});

app.use(express.urlencoded());

app.use(express.json());


const start = async () => {
    try {
        const client = new MongoClient('mongodb://localhost/mongo');
        await client.connect();
        const cardHolders = client.db().collection('card_holders');
        addCardHolder(app, cardHolders);
        app.listen(PORT, () => console.log(`app has been started on port:${PORT}...`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
};

start()