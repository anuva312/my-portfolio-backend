const Comment = require("./../models/commentModel");

// CRUD Operations

// 1.Create
exports.uploadComment = async (req, res) => {
  try {
    const currentTime = Date.now();
    const newComment = await Comment.create({
      comment: req.body.comment || "",
      name: req.body.name || "",
      email: req.body.email || "",
      createdTime: currentTime,
    });
    res.status(201).json({
      message: "Comment added Successfully",
      data: newComment,
    });
  } catch (err) {
    console.log("Comment Add Error 💥", err);
    return res.status(400).json({
      status: "Fail",
      message: "Invalid Request",
    });
  }
};

// 2. Read
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({
      status: "Success",
      count: comments.length,
      data: {
        comments,
      },
    });
  } catch (err) {
    console.log("Get All Comments Error 💥", err);
    return res.status(500).json({
      status: "Fail",
      message: "Unable to fetch the comments",
    });
  }
};

//  3. Delete

exports.deleteAllComments = async (req, res) => {
  try {
    const deleted = await Comment.deleteMany();
    console.log("Deleted", deleted);
    res.status(204).json({
      status: "Success",
      data: {
        deleted,
      },
    });
  } catch (err) {
    console.log("Delete All Comments Error 💥", err);
    return res.status(500).json({
      status: "Fail",
      message: "Unable to delete the comments",
    });
  }
};
