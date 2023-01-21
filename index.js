const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const commentRouter = require("./routes/commentRoutes");

const app = express();

// Middlewares

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/comments", commentRouter);

module.exports = app;
