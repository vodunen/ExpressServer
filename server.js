// Express.js palvelin //
const path = require('path');
const exporess = require('express');

const app = exporess();

const herkut = require('./herkut.json');

// GET ALL etsitään kaikki herkut jsonista
app.get('/api/herkut', (req, res) => {
    res.json(herkut);
});

// Tehdään polkumääritys public kansioon
const polku = path.join(__dirname, 'public');

// Sanotaan että em. polussa on tiedostosisältön jota palvelin käyttää kun se saa http request
app.use(exporess.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
