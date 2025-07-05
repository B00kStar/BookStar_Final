const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");

// GET /posts - Obtener todos los posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// POST /posts - Crear un nuevo post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: "Error al crear el post", details: err.message });
  }
});

// PUT /posts/:id - Actualizar post por ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Post no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el post", details: err.message });
  }
});

// DELETE /posts/:id - Eliminar post por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Post no encontrado" });
    res.json({ message: "Post eliminado" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar el post", details: err.message });
  }
});

module.exports = router;
