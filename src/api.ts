import axios from "axios";
import Auth from "models/auth";
import { WishlistItem } from "models/wishlist";

const API_URL = "http://localhost:5000/api"; // Adjust based on your server URL

export const registerUser = async (
  username: Auth["username"],
  password: Auth["password"]
) => {
  return await axios.post(`${API_URL}/auth/register`, { username, password });
};

export const loginUser = async (
  username: Auth["username"],
  password: Auth["password"]
) => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getWishlist = async () => {
  return await axios.get(`${API_URL}/wishlist`);
};

export const addWishlistItem = async (
  token: Auth["token"],
  item: WishlistItem
) => {
  return await axios.post(`${API_URL}/wishlist`, item, {
    headers: { Authorization: token },
  });
};

// Add other API functions as needed
