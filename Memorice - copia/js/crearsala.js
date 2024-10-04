

document.addEventListener('DOMContentLoaded', () => {

    const generateRandomCode = () => {
        return Math.floor(10000000 + Math.random() * 90000000).toString();
    };

    const randomCodeDiv = document.getElementById('random-code');

    randomCodeDiv.textContent = generateRandomCode();
});

