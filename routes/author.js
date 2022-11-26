const authorController = require("../controllers/authorController");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addAuthor);

//GET ALL AUTHORS
router.get("/", authorController.getAllAuthors);

//GET AN AUTHOR
router.get("/:id", authorController.getAuthor);

//UPDATE A AUTHOR
router.put("/:id", authorController.updateAuthor);

//DELETE A AUTHOR
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
