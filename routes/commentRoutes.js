const express = require("express");
const commentController = require("./../controllers/commentController");

const router = express.Router();

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.uploadComment)
  .delete(commentController.deleteAllComments);

module.exports = router;
