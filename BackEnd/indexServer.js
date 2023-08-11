// const express = require('express');
// const app = express();

// const cors = require('cors');

// app.use(cors())

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/users', require('./routes/users'));

// app.listen(3000, () => {
//   console.log("Server up and running on http://localhost:3000...");
// })

const express = require('express');
const routeSecondary = require('./route/routeSecond'); // Assicurati di specificare il percorso corretto al tuo file

const app = express();



// Middleware per servire file JSON
app.get('/', (req, res) => {

    const message = () =>{
        console.log('This is message')
    }

    message()

    // Invia il file JSON come risposta al client
    console.log('This is server')
});

app.use('/fileJson', (req, res) => {
    // Invia una risposta con uno status code personalizzato e un messaggio
    res.status(201).send('This is a custom route.');
});

//02
app.use(routeSecondary);

// Avvio del server
app.listen(3000, () => {
  console.log("Server up and running on http://localhost:3000...");
})