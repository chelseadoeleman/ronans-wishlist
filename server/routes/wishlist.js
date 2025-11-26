const express = require("express");
const WishlistItem = require("../models/WishlistItem");
const router = express.Router();
const auth = require("../middleware/auth");

// Get all wishlist items (public)
router.get("/", async (req, res) => {
  const items = await WishlistItem.find().populate("userId", "username");
  res.json(items);
});

// Add wishlist item (auth required)
router.post("/", auth, async (req, res) => {
  const { name, link, imgUrl, favorite, birthday } = req.body;
  const item = new WishlistItem({
    userId: req.user.id,
    name,
    link,
    imgUrl,
    favorite,
    birthday,
  });
  await item.save();
  res.status(201).json(item);
});

// Edit wishlist item (auth required)
router.put("/:id", auth, async (req, res) => {
  const { name, link, imgUrl, favorite, birthday } = req.body;
  const item = await WishlistItem.findByIdAndUpdate(
    req.params.id,
    { name, link, imgUrl, favorite, birthday },
    { new: true }
  );
  res.json(item);
});

// Delete wishlist item (auth required)
router.delete("/:id", auth, async (req, res) => {
  await WishlistItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
