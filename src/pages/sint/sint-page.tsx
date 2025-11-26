import { WishlistItem } from "models/wishlist";
import Card from "../../components/card";
import "./sint.scss";

const presents: Array<WishlistItem> = [
  {
    id: crypto.randomUUID(),
    name: "The Atlas six - Olivie Blake",
    imgUrl: "https://media.s-bol.com/mGjjMX9rWmYE/QnnzpP9/550x836.jpg",
    link: "https://www.bol.com/nl/nl/p/the-atlas-six/9300000053762901/?bltgh=ka-h9llZo03-rkLN9TlBSg.sgcgjByTTTuQFaSmzulFEQ_0_11.38.ProductTitle",
  },

  {
    id: crypto.randomUUID(),
    name: "Geurkaars Black Vanilla",
    imgUrl:
      "https://static.zara.net/photos///2022/I/4/1/p/5446/705/800/2/w/1126/5446705800_6_2_1.jpg?ts=1653291708140",
    link: "https://www.zara.com/nl/nl/-620-g--black-vanilla-geurkaars-p45446705.html?v1=177551719&v2=2124516",
  },
  {
    id: crypto.randomUUID(),
    name: "Tangle Teezer Wet detangler",
    imgUrl:
      "https://www.iciparisxl.nl/medias/zoom-front-1022956-500x500?context=bWFzdGVyfHByZC1pbWFnZXN8MTAzODZ8aW1hZ2UvanBlZ3xoMDkvaGZjLzk3MDY1MjU1NTY3NjYvem9vbS1mcm9udC0xMDIyOTU2XzUwMHg1MDB8MjRmNWU0YzRhZTliZDJhMzQyOWI4ZGNjZTc3NDJhZDY1ZjIzNGIwNWI0YmY1YTBiNjJkYzM5ZmQwYTI5OWY0Yg",
    link: "https://www.iciparisxl.nl/tangle-teezer/wet-detangler/millennial-pink/p/BP_1022956",
  },
  {
    id: crypto.randomUUID(),
    name: "Schetsboek A6",
    imgUrl: "https://media.s-bol.com/EW65mwkAo3jv/WPWDwQ4/804x1200.jpg",
    link: "https://www.bol.com/nl/nl/p/oxford-schetsboek-a6-harde-kaft-192-pagina-s-100g-papier-zwart/9300000029254816/?bltgh=vN6pIVZrCfQr33Aff3xBLw.2_35_k4TmYw8Ee2V6bEwiS1pH2g_0.3.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "Skincare haarband",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/14a5bb6e233143ef9f9ea9089717c5e6/6230d71f3ae945a1968712b10ce2667f.jpg?imwidth=1800&filter=packshot",
    link: "https://www.zalando.nl/revolution-skincare-pretty-pink-bow-headband-huidverzorgingstool-r0h34j003-s11.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Clinique black honey",
    imgUrl:
      "https://www.iciparisxl.nl/medias/prd-front-1167940-500x500.jpg?context=bWFzdGVyfHByZC1pbWFnZXN8Mjc5Njl8aW1hZ2UvanBlZ3xoOWEvaDA1Lzk3MTI3MjM0NjAxMjYvcHJkLWZyb250LTExNjc5NDBfNTAweDUwMC5qcGd8ZjhmMzdmZDg2ZmI2YTIxNzM1YmY5ZWZlNTcwNzA0ZTE0MGQyOWUzYzVjMjUwMzc4MzhmZmM5NmQ4NWZlZTZlYQ",
    link: "https://www.iciparisxl.nl/clinique/almost-lipstick/lippenstift-lipgloss/p/BP_1167940?channable=0116ba6774696e003230373134303034353037ce&varSel=1167940&gclid=Cj0KCQiA37KbBhDgARIsAIzce15FTcmxOIh6sZ7GJesOTCIo9R1kVN6IOBFarGUl4yCmBEpUwLCoA7IaAo4JEALw_wcB",
  },
];

const SintPage = () => {
  return (
    <div className="page sint">
      <div className="title-container">
        <h2>Chelsea's</h2>
        <h1>Sinterklaas lijstje</h1>
      </div>
      <div className="cards-container">
        {presents.map((present) => (
          <Card present={present} />
        ))}
      </div>
    </div>
  );
};

export default SintPage;
