document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let musicPlaying = false;

    if (musicToggle && backgroundMusic) {
        musicToggle.addEventListener('click', () => {
            if (musicPlaying) {
                backgroundMusic.pause();
                musicToggle.innerHTML = '<i class="fa-solid fa-music"></i> Música';
            } else {
                backgroundMusic.play();
                musicToggle.innerHTML = '<i class="fa-solid fa-pause"></i> Música';
            }
            musicPlaying = !musicPlaying;
        });
    }

    const infoButton = document.getElementById('info-button');
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));

    if (infoButton && infoModal) {
        infoButton.addEventListener('click', () => {
            infoModal.show();
        });
        document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', () => {
            infoModal.hide();
        });
    }

    const volumeControl = document.getElementById('volume-control');
    if (volumeControl && backgroundMusic) {
        volumeControl.addEventListener('input', function (event) {
            var volume = event.target.value / 100;
            backgroundMusic.volume = volume;
        });
    }
});
const sound = new Audio('musica/stop-13692.mp3');

document.querySelector('.logo').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});

document.querySelector('.dropdown-toggle').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});

document.querySelector('.btn-primary').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.dropdown-item').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.dropdown-menu').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.music-menu-button').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.avatar-container').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.faccebook-button').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.google-button').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.btn-secondary').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.form-control').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});
document.querySelector('.button-salida').addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
});

