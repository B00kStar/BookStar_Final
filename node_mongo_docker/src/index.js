const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Conexión a la base de datos
require("./database");

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/books", require("./routes/book.routes"));
app.use("/users", require("./routes/user.routes"));
app.use("/orders", require("./routes/order.routes"));
app.use("/posts", require("./routes/post.routes"));

// Puerto y arranque del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
