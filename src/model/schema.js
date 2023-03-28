const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  Image: {
    type: String,
  },
  Name: {
    type: String,
  },
  Source: {
    type: String,
  },
});

const Todo = new mongoose.model("Collection", blogSchema);

const blogSchema2 = new mongoose.Schema({
  id: {
    type: Number,
  },
  Image: {
    type: String,
  },
  Name: {
    type: String,
  },
  Source: {
    type: String,
  },
});

const Todo2 = new mongoose.model("Collection2", blogSchema2);

module.exports = { Todo, Todo2 };
