const infoButton = document.getElementById('info-button');
        const infoButtonIcon = document.getElementById('info-icon');
        const backgroundinfo = document.getElementById('background-info');

        infoButton.addEventListener('click', () => {
            if (backgroundInfo.abre) {
                backgroundInfo.cierra();
                infoButton.classList.remove('fa-abre');
                infoButton.classList.add('fa-ciera');
            } else {
                backgroundinfo.cierra();
                infoButton.classList.remove('fa-cierra');
                infoButton.classList.add('fa-abre');
            }
        });