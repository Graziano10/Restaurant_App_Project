const express = require('express');
const routeSecondary = express.Router();

// Definizione della route '/secondary'
routeSecondary.get('/secondary', (req, res) => {
    const secondary = () => {
        console.log('02');
    }

    res.status(201).send('This is a secondary Route');
});

module.exports = routeSecondary;