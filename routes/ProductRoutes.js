const express = require("express");
const {} = require("../controllers/")
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);

module.exports = router;