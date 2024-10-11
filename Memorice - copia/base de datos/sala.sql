CREATE TABLE Salas(
    idSala INT PRIMARY KEY AUTO_INCREMENT,
    nombreSala VARCHAR(150) NOT NULL,
    maxJugadores INT NOT NULL,
    estado VARCHAR(50) NOT NULL DEFAULT 'abierta'
);
CREATE TABLE Jugadores(
    idJugador INT PRIMARY KEY AUTO_INCREMENT,
    nombreJugador VARCHAR(100) NOT NULL,
    puntuacion INT DEFAULT 0
);
CREATE TABLE Partidas(
    idPartida INT PRIMARY KEY AUTO_INCREMENT,
    idSala INT,
    idJugador INT,
    fechaInicio TIMESTAMP,
    fechaFin TIMESTAMP,
)
INSERT INTO Salas (nombreSala, maxJugadores) 
VALUES ('Multijugador', 4);

INSERT INTO Jugadores (nombreJugador, puntuacion) 
VALUES ('Juan', 100), ('Maria', 200), ('Carlos', 150);