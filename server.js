const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('./public/index.html');
})

app.get('/:word', (req, res) => {
    let search  = req.params.word.toLowerCase();
    try {
        let definitions = require(`./data/${search[0]}.json`);
        let word = definitions[`${search}`];
        if (word == undefined) throw "Word not found";
        res.json(word.meanings);
    } catch (err) {
        let definitions = require('./data/misc.json');
        let word = definitions[search];
        if (word != undefined) res.json(word.meanings);
        res.status(400).json({ message: `Couldn't find the word ${search}` });
    }
})



app.listen(PORT || process.env.PORT)

