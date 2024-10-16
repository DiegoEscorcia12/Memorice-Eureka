document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;
    body.className = "text-center";

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    body.appendChild(menuContainer);


    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "col-0 d-flex justify-content-between mt-2";
    menuContainer.appendChild(buttonWrapper);

    const buttonSalida = document.createElement("div");
    buttonSalida.className = "button-salida";
    buttonWrapper.appendChild(buttonSalida);

    const backButton = document.createElement("a");
    backButton.href = "./index.html";
    backButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    buttonSalida.appendChild(backButton);

    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    buttonWrapper.appendChild(dropdown);

    const dropdownButton = document.createElement("button");
    dropdownButton.className = "btn dropdown-toggle music-menu-button";
    dropdownButton.type = "button";
    dropdownButton.id = "menuDropdown";
    dropdownButton.setAttribute("data-bs-toggle", "dropdown");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdown.appendChild(dropdownButton);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";
    dropdownMenu.setAttribute("aria-labelledby", "menuDropdown");
    dropdown.appendChild(dropdownMenu);

    const musicToggleItem = document.createElement("li");
    const musicToggleButton = document.createElement("button");
    musicToggleButton.id = "music-toggle";
    musicToggleButton.className = "dropdown-item";
    musicToggleButton.innerHTML = '<i class="fa-solid fa-music"></i> Música';
    musicToggleItem.appendChild(musicToggleButton);
    dropdownMenu.appendChild(musicToggleItem);

    const infoItem = document.createElement("li");
    const infoButton = document.createElement("button");
    infoButton.id = "info-button";
    infoButton.className = "dropdown-item";
    infoButton.setAttribute("data-bs-toggle", "modal");
    infoButton.setAttribute("data-bs-target", "#infoModal");
    infoButton.innerHTML = '<i class="fa-regular fa-circle-question"></i> Información';
    infoItem.appendChild(infoButton);
    dropdownMenu.appendChild(infoItem);

    const imageRow = document.createElement("div");
    imageRow.className = "row mt-4 justify-content-center";
    menuContainer.appendChild(imageRow);

    const robotImage = document.createElement("img");
    robotImage.className = "imagen col-4 ms-5";
    robotImage.src = "./imagenes/robott-removebg-preview.png";
    robotImage.alt = "";
    imageRow.appendChild(robotImage);

    const titleElement = document.createElement("h1");
    titleElement.className = "text4 animate__animated animate__fadeInDown";
    titleElement.textContent = "Calificaciones";
    menuContainer.appendChild(titleElement);

    const rankingRow = document.createElement("div");
    rankingRow.className = "row justify-content-center";
    menuContainer.appendChild(rankingRow);

    const rankingCol = document.createElement("div");
    rankingCol.className = "col-md-7";
    rankingRow.appendChild(rankingCol);

    const rankingContainer = document.createElement("div");
    rankingContainer.id = "ranking";
    rankingCol.appendChild(rankingContainer);

    const rankingData = [
        { name: "Manuel Felipe", points: "20,290 Puntos", icon: "fa-user-astronaut", textClass: "text-primary" },
        { name: "Jorge", points: "12,480 Puntos", icon: "fa-user-circle", textClass: "" },
        { name: "Trespalacios", points: "10,430 Puntos", icon: "fa-user-circle", textClass: "" },
        { name: "Andrés", points: "4,420 Puntos", icon: "fa-user-circle", textClass: "" }
    ];

    rankingData.forEach(player => {
        const card = document.createElement("div");
        card.className = "card mb-3";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex justify-content-between align-items-center";
        card.appendChild(cardBody);

        const icon = document.createElement("i");
        icon.className = `fa ${player.icon} fa-2x me-3 ${player.textClass}`;
        cardBody.appendChild(icon);

        const name = document.createElement("div");
        name.textContent = player.name;
        cardBody.appendChild(name);

        const points = document.createElement("span");
        points.textContent = player.points;
        cardBody.appendChild(points);

        rankingContainer.appendChild(card);
    });

    // Modal de información
    const infoModal = document.createElement("div");
    infoModal.className = "modal fade";
    infoModal.id = "infoModal";
    infoModal.tabIndex = "-1";
    infoModal.setAttribute("aria-labelledby", "infoModalLabel");
    infoModal.setAttribute("aria-hidden", "true");
    menuContainer.appendChild(infoModal);

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";
    infoModal.appendChild(modalDialog);

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalDialog.appendChild(modalContent);

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalContent.appendChild(modalHeader);

    const modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = "infoModalLabel";
    modalTitle.textContent = "Información del Juego";
    modalHeader.appendChild(modalTitle);

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Cerrar");
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = `
        <p>¡Bienvenido a MEMORY! Este juego está diseñado para desafiar y mejorar tu memoria. Selecciona las cartas que coincidan y completa todos los pares en el menor tiempo posible.</p>
        <ul>
            <li><strong>Objetivo:</strong> Emparejar todas las cartas lo más rápido posible.</li>
            <li><strong>Controles:</strong> Haz clic en una carta para voltearla.</li>
            <li><strong>Niveles:</strong> Varios niveles de dificultad para todos los jugadores.</li>
            <li><strong>Sonido:</strong> Controla la música de fondo desde el menú.</li>
        </ul>`;
    modalContent.appendChild(modalBody);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalContent.appendChild(modalFooter);

    const closeFooterButton = document.createElement("button");
    closeFooterButton.type = "button";
    closeFooterButton.className = "btn btn-secondary";
    closeFooterButton.setAttribute("data-bs-dismiss", "modal");
    closeFooterButton.textContent = "Cerrar";
    modalFooter.appendChild(closeFooterButton);

    const confettiContainer = document.createElement("div");
    confettiContainer.className = "confetti-container";
    body.appendChild(confettiContainer);

    const backgroundMusic = document.createElement("audio");
    backgroundMusic.id = "background-music";
    backgroundMusic.src = "./musica/DuckTales Music (NES) - The Moon Theme.mp3";
    backgroundMusic.loop = true;
    body.appendChild(backgroundMusic);
});
