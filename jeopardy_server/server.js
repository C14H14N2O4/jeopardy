const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send({'Hello World!':[{"test":"test"}]})
    console.log("got a get req")
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.put('/', (req, res) => {
    res.send('Hello World!')
})


