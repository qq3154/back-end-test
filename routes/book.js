const bookController = require("../controllers/bookController");

const router = require("express").Router();

//ADD BOOK
router.post("/", bookController.addBook);

//GET ALL BOOKS
router.get("/", bookController.getAllBooks);

//GET AN BOOK
router.get("/:id", bookController.getBook);

//UPDATE A BOOK
router.put("/:id", bookController.updateBook);

//DELETE A BOOK
router.delete("/:id", bookController.deleteBook);

module.exports = router;
