const express = require("express");
const router = express.Router();

router.get("/trucks/view", (req, res) => {
  res.json([{ id: 1, name: "Burger Truck", status: "Open" }]);
});

router.get("/menuItem/truck/:id", (req, res) => {
  res.json([
    { id: 1, name: "Burger", price: 50, description: "Beef burger" }
  ]);
});

router.post("/cart/new", (req, res) => res.json({ success: true }));
router.get("/cart/view", (req, res) => res.json([]));
router.post("/order/new", (req, res) => res.json({ success: true }));
router.get("/order/myOrders", (req, res) => res.json([]));

module.exports = router;
