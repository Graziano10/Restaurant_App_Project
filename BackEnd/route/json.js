const express = require('express');
const json = express.Router();
const jsonServer = require('json-server');

// Crea un'istanza dell'app Express
const app = express();

// Usa json-server come middleware
const jsonServerMiddleware  = jsonServer.router('db.json');
app.use('/api', jsonServerMiddleware);

json.get('/fileJson', (_, res) => {
    // Invia una risposta con lo status code 201 e un messaggio personalizzato
    res.status(201).send('This is a custom route.');
});

module.exports = json;;