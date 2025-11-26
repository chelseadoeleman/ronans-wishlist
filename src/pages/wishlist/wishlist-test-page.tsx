import { getWishlist } from "api";
import { WishlistItem } from "models/wishlist";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [items, setItems] = useState<Array<WishlistItem>>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getWishlist();
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <a href={item.link}>Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
