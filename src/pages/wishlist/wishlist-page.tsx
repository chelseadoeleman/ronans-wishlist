import { WishlistItem } from "models/wishlist";
import Snowfall from "react-snowfall";
import Card from "../../components/card";

const presents: Array<WishlistItem> = [
  {
    id: crypto.randomUUID(),
    name: "Aroma Diffuser - Terrazzo Kubus",
    imgUrl:
      "https://geurwolkje.nl/cdn/shop/files/aroma_diffuser_terrazzo_wit_living_green.png?v=1724143741&width=1500",
    link: "https://geurwolkje.nl/collections/aroma-diffuser/products/terazzo-kubus-200-ml",
  },
  {
    id: crypto.randomUUID(),
    name: "Suitsupply Gift Card",
    imgUrl:
      "https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,b_rgb:FFFFFF,w_1440/suitsupply/campaigns/fw26/GiftCardLandingPageImage.jpg",
    link: "https://suitsupply.com/en-us/giftcardlanding.html",
  },
  {
    id: crypto.randomUUID(),
    name: "ARC'TERYS Muts",
    imgUrl: "https://media.s-bol.com/PymqLJjm0pGn/lOMklyl/541x840.jpg",
    link: "-	Arc’teryx Grotto Toque Black void",
  },
  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },

  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },

  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },

  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },

  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },

  // {
  //   id: crypto.randomUUID(),
  //   name: "",
  //   imgUrl: "",
  //   link: "",
  // },
];

const WishlistPage = () => {
  return (
    <div className="christmas">
      <Snowfall
        style={{
          color: "#FFF4E3",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 999,
        }}
      />
      <div className="page">
        <div className="title-container">
          <h1>Ronan's Christmas Wishlist</h1>
        </div>
        <div className="cards-container">
          {presents.map((present, index) => (
            <Card present={present} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
