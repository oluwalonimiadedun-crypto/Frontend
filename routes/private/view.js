const express = require("express");
const auth = require("../../middleware/auth");
const router = express.Router();

router.get("/dashboard", auth, (req, res) => res.render("customerHomepage"));
router.get("/trucks", auth, (req, res) => res.render("trucks"));
router.get("/truckMenu/:id", auth, (req, res) => res.render("truckMenu"));
router.get("/cart", auth, (req, res) => res.render("cart"));
router.get("/myOrders", auth, (req, res) => res.render("myOrders"));
router.get("/ownerDashboard", auth, (req, res) => res.render("ownerDashboard"));
router.get("/menuItems", auth, (req, res) => res.render("menuItems"));
router.get("/addMenuItem", auth, (req, res) => res.render("addMenuItem"));
router.get("/truckOrders", auth, (req, res) => res.render("truckOrders"));

module.exports = router;
