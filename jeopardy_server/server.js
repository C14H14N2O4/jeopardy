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
var hasFinished = false;

app.get('/', (req, res) => {
    res.send()
    console.log("got a get req")
})

app.post('/player', (req, res) => {
    if (isOpen && !hasFinished) {
        names.push(req.body.name);
        hasFinished = true;
        console.log(names);
        res.send(`${names[0]}, you won!`);
    } else if (hasFinished) { 
        res.send(`Too slow, winner is ${names[0]}`)
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
    res.send("reset");
});