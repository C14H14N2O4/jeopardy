const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send()
    console.log("got a get req")
})

app.post('/', (req, res) => {
    res.json(req.body)
})

app.put('/', (req, res) => {
    res.send('Hello World!')
})


