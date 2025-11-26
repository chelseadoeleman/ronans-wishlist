const mongoose = require("mongoose");

const wishlistItemSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  link: { type: String, required: true },
  imgUrl: { type: String, required: true },
  favorite: { type: String, required: false },
  birthday: { type: String, required: false },
});

module.exports = mongoose.model("WishlistItem", wishlistItemSchema);
