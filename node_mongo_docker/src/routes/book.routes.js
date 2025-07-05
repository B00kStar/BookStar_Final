const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

// GET /books - Obtener todos los libros
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST /books - Crear un nuevo libro
router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: "Error al crear el libro", details: err.message });
  }
});

// PUT /books/:id - Actualizar un libro por ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el libro", details: err.message });
  }
});

// DELETE /books/:id - Eliminar un libro por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Libro no encontrado" });
    res.json({ message: "Libro eliminado" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar el libro", details: err.message });
  }
});

module.exports = router;
