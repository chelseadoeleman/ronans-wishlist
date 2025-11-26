import { WishlistItem } from "models/wishlist";
import Snowfall from "react-snowfall";
import Card from "../../components/card";

const presents: Array<WishlistItem> = [
  {
    id: crypto.randomUUID(),
    name: "Reebok club c85 off-white (37)",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/ef65c53fdf5440faa396b40b459eb9a3/8ab2e49d54cb4bdb8d87b0f00df0502b.jpg?imwidth=1800",
    link: "https://www.zalando.nl/reebok-classic-club-c-85-unisex-sneakers-laag-chalkclassic-cobalt-re015o0hk-a12.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Verzwarings-knuffel Koala",
    imgUrl:
      "https://lotgenootje.com/cdn/shop/files/10_af4e39ed-43e3-4189-84a6-f9e34c55b6b8.png?v=1752525251&width=1080",
    link: "https://lotgenootje.com/products/verzwaringsknuffel-lotgenootje-koala-2kg",
  },
  {
    id: crypto.randomUUID(),
    name: "Lego Ewok",
    imgUrl: "https://media.s-bol.com/PymqLJjm0pGn/lOMklyl/541x840.jpg",
    link: "https://www.bol.com/nl/nl/p/lego-star-wars-wicket-the-ewok-75430/9300000227400269/?cid=1761478455845-2410785216498&bltgh=kf-jwDrNnlsFK2mgwQpKPw.4_99.107.ProductImage",
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
