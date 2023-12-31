const express = require('express');

const app = express();


// Middleware per servire file JSON
app.get('/', (req, res) => {


});

app.use('/fileJson', (req, res) => {
    // Invia una risposta con uno status code personalizzato e un messaggio
    res.status(201).send('This is a custom route.');
});


// Send Mail EmailJS
app.post('/send-email', (req, res) => {
    const { to_email, subject, message } = req.body;
  
    const emailData = {
      text: message,
      from: email,
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



// Avvio del server
app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
})