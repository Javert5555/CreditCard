// const { Router } = require('express');
// const router = new Router();

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/src", "/index.html"));
// });

// module.exports = router;
const addCardHolder = (app, db) => {
    app.post('/holder', async (request, response) => {
        try {
            const existingCardHolder = await db.findOne({cardNumber: request.body.cardHolderInfo.cardNumber});
            if(!request.body) {
                return response.sendStatus(400);
            } else if (existingCardHolder) {
                // return response.send('Номер занят');
                return response.status(401).json({message: 'Номер занят'});
            } else {
                await db.insertOne(
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
            return response.status(500).json({message: 'Ошибка на стороне сервера'});
        }

    });
};

module.exports = addCardHolder;
