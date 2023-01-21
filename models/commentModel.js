const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name cannot be empty!"],
  },
  originalName: String,
  comment: {
    type: String,
    required: [true, "The comment cannot be empty!"],
  },
  email: {
    type: String,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  },
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
