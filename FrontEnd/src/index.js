// PRESERVATION  USER

const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");

const increment = (amount) => {
  const currentCount = parseInt(count.textContent);
  const newCount = currentCount + amount;
  if (newCount >= 1) {
    count.textContent = newCount;
  };
};

add.addEventListener("click", () => increment(1));

sub.addEventListener("click", () => increment(-1, 1));



// PRESERVATION TABLE

document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('.grid > div[free="true"]');
    const tableStatus = document.getElementById('table');

    tables.forEach(table => {
        table.addEventListener('click', () => {
            const tableNumber = table.innerText.trim();
            tableStatus.innerText = table.classList.contains('free')
                ? `Tavolo Prenotato: ${tableNumber}`
                : "Questo tavolo è occupato";
        });
    });
});

// CODE FORM

