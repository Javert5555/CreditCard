const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require('mongodb');

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
        app.post('/holder', async (request, response) => {
            try {
                const existingCardHolder = await cardHolders.findOne({cardNumber: request.body.cardHolderInfo.cardNumber});
                if(!request.body) {
                    return response.sendStatus(400);
                } else if (existingCardHolder) {
                    return response.send('Номер занят');
                } else {
                    await cardHolders.insertOne(
                        {
                            cardNumber: request.body.cardHolderInfo.cardNumber,
                            cardHolder: request.body.cardHolderInfo.cardHolder,
                            cardMonth: request.body.cardHolderInfo.cardMonth,
                            cardYear: request.body.cardHolderInfo.cardYear,
                            cardCVV: request.body.cardHolderInfo.cardCVV
                        },
                    );
                    return response.send('Всё норм');
                }
            } catch (error) {
                console.log(error)
                return response.status(500).json({message: 'Ошибка на стороне сервера'})
            }

        });
        app.listen(PORT, () => console.log(`app has been started on port:${PORT}...`));
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
};

start()