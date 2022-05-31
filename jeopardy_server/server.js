const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

var names = [];
var isOpen = false;

app.get('/', (req, res) => {
    res.send()
    console.log("got a get req")
})

app.post('/', (req, res) => {
    if (isOpen) {
        names.push(req.body.name);
        console.log(names);
        res.send(`Winner is ${req.body.name}`);
    } else {
        res.send("Too early!");
    }
})

app.post('/start', (req, res) => {
    isOpen = true;
    res.send("Question is open for responses");
});

app.post('/reset', (req, res) => {
    isOpen = false;
    names = [];
    console.log(names);
    res.send("reset");
});