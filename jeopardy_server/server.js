const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send()
    console.log("got a get req")
})

app.post('/', (req, res) => {
    console.log(req.body.name);
    res.send("hello")
})

app.put('/', (req, res) => {
    res.send('Hello World!')
})


