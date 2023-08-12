const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs');

const app = express();


// Configurazione emailjs
const emailServer = emailjs.server.connect({
    user: email,
    password: password,
    host: host_email,
    ssl: true
  });
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  
  // Route per l'invio dell'email
  app.post('/send-email', (req, res) => {
    const { to_email, subject, message } = req.body;
  
    const emailData = {
      text: message,
      from: 'your_email@example.com',
      to: to_email,
      subject: subject
    };
  
    emailServer.send(emailData, (err, message) => {
      if (err) {
        console.error('Errore nell\'invio dell\'email:', err);
        res.status(500).json({ error: 'Errore nell\'invio dell\'email' });
      } else {
        console.log('Email inviata con successo:', message);
        res.status(200).json({ message: 'Email inviata con successo' });
      }
    });
  });
  