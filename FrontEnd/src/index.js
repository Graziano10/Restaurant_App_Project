// PRESERVATION  USER

const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");

const increment = (amount) => {
  const currentCount = parseInt(count.textContent);
  const newCount = currentCount + amount;
  if (newCount >= 1) {
    count.textContent = newCount;
  }
};

add.addEventListener("click", () => increment(1));

sub.addEventListener("click", () => increment(-1, 1));

// PRESERVATION TABLE

document.addEventListener("DOMContentLoaded", function () {
  const tables = document.querySelectorAll('.grid > div[free="true"]');
  const tableStatus = document.getElementById("table");

  tables.forEach((table) => {
    table.addEventListener("click", () => {
      const tableNumber = table.innerText.trim();
      tableStatus.innerText = table.classList.contains("free")
        ? `Tavolo Prenotato: ${tableNumber}`
        : "Questo tavolo è occupato";
    });
  });
});

// CODE FORM SEND CONSOLE

// const form = document.getElementById("form");
// const countElement = document.getElementById('count');
// const tableElement = document.getElementById('table').querySelector('span');

// document.addEventListener("DOMContentLoaded", function () {
//   form.addEventListener("submit", (event) => {
//     event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

//     // Ottieni i valori dei campi del modulo
//     const formData = new FormData(form);

//     // Ottieni valori specifici e stampali nella console
//     const username = formData.get("username");
//     const email = formData.get("email");
//     const data = formData.get("event_datetime");

//     console.log(`Username: ${username}`);
//     console.log(`Email: ${email}`);
//     console.log(`Data: ${data}`);

//     const countText = countElement.textContent.trim();
//     console.log(countText);

//     const tableStatus = table.textContent.trim();
//     console.log(tableStatus);
//   });
// });


// Send Mail
const form = document.getElementById("form");
const countElement = document.getElementById("count");
const tableElement = document.getElementById("table").querySelector("span");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

    // Ottieni i valori dei campi del modulo
    const formData = new FormData(form);

    // Ottieni valori specifici
    const username = formData.get("username");
    const email = formData.get("email");
    const data = formData.get("event_datetime");
    const countText = countElement.textContent.trim(); // Ottieni il testo del conteggio
    const tableStatus = tableElement.textContent.trim(); // Ottieni lo stato del tavolo

    // Configura i parametri per l'invio dell'email
    const templateParams = {
      to_email: email,
      subject: "Conferma Prenotazione",
      body: `Gentile ${username},
      La sua prenotazione per il ${data} è stata confermata.
      Grazie per aver scelto il nostro servizio.
      Dettagli prenotazione:
      - Username: ${username}
      - Email: ${email}
      - Persone: ${countText}
      - Stato Tavolo: ${tableStatus}`,
    };

    // Invia l'email utilizzando EmailJS
    emailjs
      .send(
        "service_id",
        "template_id",
        templateParams,
        "Public Key"
      )
      .then(function (response) {
        console.log("Email inviata:", response);
      })
      .catch(function (error) {
        console.error("Errore nell'invio dell'email:", error);
      });
  });
});
