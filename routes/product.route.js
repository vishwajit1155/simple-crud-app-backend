const express = require("express");
const Product = require("../models/product.model");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

// FIND ALL Products
router.get("/", getProducts);

// FIND a Product
router.get("/:id", getProduct);

// CREATE a Product
router.post("/", createProduct);

// UPDATE a Product.
router.put("/:id", updateProduct);

// DELETE a Product.
router.delete("/:id", deleteProduct);

module.exports = router;
