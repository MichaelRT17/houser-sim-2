const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/api/houses', ctrl.showHouses);
app.post('/api/createHouse', ctrl.createHouse);
app.delete('/api/deleteHouse/:id', ctrl.deleteHouse);

const PORT = 8080;
massive(process.env.POSTGRES_DB).then(db => {
    app.set('db', db)
    app.listen(PORT, () => {
        console.log(`yo yo yo from port: ${PORT}`)
    });
});