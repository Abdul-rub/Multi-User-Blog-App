const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user", //providing reference to user
    required: true,
  },
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
