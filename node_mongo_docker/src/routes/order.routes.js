const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

// GET /orders - Obtener todos los pedidos
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// POST /orders - Crear un nuevo pedido
router.post("/", async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: "Error al crear el pedido", details: err.message });
  }
});

// PUT /orders/:id - Actualizar pedido por ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Pedido no encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el pedido", details: err.message });
  }
});

// DELETE /orders/:id - Eliminar pedido por ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Pedido no encontrado" });
    res.json({ message: "Pedido eliminado" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar el pedido", details: err.message });
  }
});

module.exports = router;
