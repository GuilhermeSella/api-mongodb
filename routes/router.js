const express = require("express")
const ProductController = require("../controllers/ProductController")
const router = express.Router()



router.get("/", ProductController.ShowProducts)
router.get("/:id", ProductController.ShowOneProduct)
router.post("/", ProductController.CreateProducts)
router.delete("/:id", ProductController.DeleteProduct)


module.exports = router;