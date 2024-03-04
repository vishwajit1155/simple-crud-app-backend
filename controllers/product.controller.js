const Product = require("../models/product.model");

// FIND ALL Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // finds all products in db
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// FIND a Product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id); // find data by id
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// CREATE a Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // store data in db
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 is error data was not stored in db
  }
};

// UPDATE a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      // first check in thd db product is avaliable or not
      return res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
