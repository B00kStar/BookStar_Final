const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// GET /users - Obtener todos los usuarios
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST /users - Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Error al crear el usuario", details: err.message });
  }
});

// PUT /users/:id - Actualizar usuario por ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el usuario", details: err.message });
  }
});

// DELETE /users/:id - Eliminar usuario por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar el usuario", details: err.message });
  }
});

module.exports = router;
