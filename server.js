// Server initialisieren
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Statische Dateien ausliefern
app.use(express.static("public"));

// Array zum Speichern der Zeichnungen der Clients
const drawings = [];

// Event-Handler für neue Verbindungen
io.on("connection", (socket) => {
  console.log("Neuer Client verbunden:", socket.id);

  // Sende aktuelle Zeichnungen an den neu verbundenen Client
  socket.emit("drawings", drawings);

  // Event-Handler für neue Linien von einem Client
  socket.on("line", (data) => {
    // Speichere die Linie in den Zeichnungen
    drawings.push(data);

    // Sende die Linie an alle verbundenen Clients
    io.emit("line", data);
  });

  // Event-Handler für das Löschen der Zeichnungen
  socket.on("clear", () => {
    // Leere die Zeichnungen
    drawings.length = 0;

    // Sende das Signal zum Löschen an alle verbundenen Clients
    io.emit("clear");
  });

  // Event-Handler für die Trennung eines Clients
  socket.on("disconnect", () => {
    console.log("Client getrennt:", socket.id);
  });
});

// Server starten
const port = 3000;
server.listen(port, () => {
  console.log(
    "Server gestartet. Öffne http://localhost:" + port + " in deinem Browser."
  );
});
// Server initialisieren
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Statische Dateien ausliefern
app.use(express.static("public"));

// Array zum Speichern der Zeichnungen der Clients
const drawings = [];

// Event-Handler für neue Verbindungen
io.on("connection", (socket) => {
  console.log("Neuer Client verbunden:", socket.id);

  // Sende aktuelle Zeichnungen an den neu verbundenen Client
  socket.emit("drawings", drawings);

  // Event-Handler für neue Linien von einem Client
  socket.on("line", (data) => {
    // Speichere die Linie in den Zeichnungen
    drawings.push(data);

    // Sende die Linie an alle verbundenen Clients
    io.emit("line", data);
  });

  // Event-Handler für das Löschen der Zeichnungen
  socket.on("clear", () => {
    // Leere die Zeichnungen
    drawings.length = 0;

    // Sende das Signal zum Löschen an alle verbundenen Clients
    io.emit("clear");
  });

  // Event-Handler für die Trennung eines Clients
  socket.on("disconnect", () => {
    console.log("Client getrennt:", socket.id);
  });
});

// Server starten
const port = 3000;
server.listen(port, () => {
  console.log(
    "Server gestartet. Öffne http://localhost:" + port + " in deinem Browser."
  );
});
