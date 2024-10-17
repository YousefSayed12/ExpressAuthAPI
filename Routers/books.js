const express = require("express")
const router = express.Router()
const booksController = require("../Controllers/books")
const authntication = require("../middleware/auth")

router.get("/api/books" ,authntication, booksController.getAllBooks)
router.get("/api/books/:id" ,authntication, booksController.getOneBook)
router.delete("/api/books/:id" ,authntication, booksController.deleteBook)
router.put("/api/books/:id" ,authntication, booksController.updateBook)
router.post("/api/books" ,authntication, booksController.createBook)

module.exports = router
