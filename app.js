const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000

app.post('/bfhl', async (req, res) => {

    try {
        const data = req.body.data;
        const numbers = []
        const alphabets = []
        data.forEach(ele => {
            if (Number.isInteger(parseInt(ele, 10))) {
                numbers.push(ele);
            }
            else {
                alphabets.push(ele);
            }
        });
        const obj = {
            is_success: true,
            user_id: "kanchan_sikder_14082001",
            email: '0112CS191050.com',
            roll_number: '0112CS191050',
            numbers,
            alphabets
        };
        const myJSON = JSON.stringify(obj);
        res.send(myJSON);

    } catch (e) {
        const obj = {
            is_success: false,
            user_id: "kanchan_sikder_14082001",
            email: '0112CS191050.com',
            roll_number: '0112CS191050'
        };
        const myJSON = JSON.stringify(obj);
        res.status(404).send(myJSON)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port + ".")
})