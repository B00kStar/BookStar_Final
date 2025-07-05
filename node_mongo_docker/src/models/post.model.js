const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Types.ObjectId, required: true },
    authorName: String,
    title: { type: String, required: true },
    content: String,
    relatedBookId: mongoose.Types.ObjectId,
    tags: [String],
    comments: [
      {
        userId: mongoose.Types.ObjectId,
        userName: String,
        text: String,
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Post", postSchema);
