// Script para crear confetti/chispitas
const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);

    // Elimina el confetti después de que haya caído
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Genera confetti cada 200ms
setInterval(createConfetti, 200);