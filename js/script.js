const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let found = false;

// Elige una celda aleatoria para ocultar el objeto
const hiddenIndex = Math.floor(Math.random() * cells.length);
cells[hiddenIndex].dataset.hidden = true;

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (found) return; // Si ya se encontró el objeto, no hacer nada

        if (cell.dataset.hidden) {
            cell.classList.add('found');
            message.textContent = '¡Lo encontraste!';
            found = true;
        } else {
            message.textContent = 'Intenta de nuevo';
        }
    });
});
