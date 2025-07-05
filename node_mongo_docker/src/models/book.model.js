const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: Number,
    stock: Number,
    coverUrl: String,
    fileUrl: String,
    language: String,
    publicationDate: Date,
    category: [String],
    authorId: mongoose.Types.ObjectId,
    authorName: String,
    averageRating: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Book", bookSchema);
