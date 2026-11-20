import { WishlistItem } from "models/wishlist";
import Snowfall from "react-snowfall";
import Card from "../../components/card";

const presents: Array<WishlistItem> = [
    {
    id: crypto.randomUUID(),
    name: "Google Fitbit Air - Zwart (Obsidian)",
    imgUrl:
      "https://media.s-bol.com/lnVjj1LA2ZLM/9Qyrv8P/550x836.jpg",
    link: "https://store.google.com/nl/product/google_fitbit_air?hl=nl&srsltid=AYCX9vLtSSdNJIKRTgX3m7JpZdvYmW5JVLtt2h2dz9F3D_q0tJUfmz32",
    favorite: true
  },
  {
    id: crypto.randomUUID(),
    name: "Apple Airpods Pro 3 - Wireless Charging Case",
    imgUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=976&hei=916&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eWVDYXovZDMyN1dXU211bjZoVlVUcWJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",
    link: "https://www.amazon.nl/Apple-Ruisonderdrukking-Hartslagmeting-Gehoorapparaat-feature-Bluetooth-koptelefoon/dp/B0FQF32239?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A17D2BRD4YMT0X&language=nl_NL&utm_source=chatgpt.com"
  },
  {
    id: crypto.randomUUID(),
    name: "Suitsupply Gift Card",
    imgUrl:
      "https://cdn.suitsupply.com/image/upload/fl_progressive,f_auto,b_rgb:FFFFFF,w_1440/suitsupply/campaigns/fw26/GiftCardLandingPageImage.jpg",
    link: "https://suitsupply.com/en-us/giftcardlanding.html",
    favorite: true
  },
    {
    id: crypto.randomUUID(),
    name: "Yeti Rambler - Stainless Steel 26 Oz.",
    imgUrl: "https://nl.yeti.com/cdn/shop/files/21071200017_70000000483_21071200025_Drinkware_BottleChug_26oz_SS_Studio_Back.png?v=1750778363&width=1346",
    link: "https://nl.yeti.com/products/rambler-26-bottle-with-chug-cap-stainless-steel",
  },
  {
    id: crypto.randomUUID(),
    name: "French Avenue Arsh Extrait de Parfum - 100ml",
    imgUrl: "https://cdn.deloox.com/cdn/product/1378760/583244_500.jpg?format=webp",
    link: "https://www.deloox.nl/product/1378760/french-avenue-arsh-extrait-de-parfum-100-ml.html",
    favorite: true
  },
  {
    id: crypto.randomUUID(),
    name: "Navy Merino Long Sleeve Polo (Maat M)",
    imgUrl: "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_500px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_1690,h_2338,f_auto,q_auto,fl_progressive/products/knitwear/default/SW1681_25.jpg",
    link: "https://suitsupply.com/en-nl/men/knitwear/navy-merino-long-sleeve-polo/SW1681.html",
  },
    {
    id: crypto.randomUUID(),
    name: "Toilettas Rains Large - Black",
    imgUrl: "https://img01.ztat.net/article/spp-media-p1/7ca94e5578aa403599537fd913e6b533/3e1a874c4ee14f618d01b1b27c46b0ee.jpg?imwidth=1800&filter=packshot",
    link: "https://www.zalando.nl/rains-wash-bag-large-unisex-toilettas-black-ri054h01k-q11.html",
  },
    {
    id: crypto.randomUUID(),
    name: "Lego SF90 XX Stradale",
    imgUrl: "https://m.media-amazon.com/images/I/81rUjfzqykL._AC_SL1500_.jpg",
    link: "https://www.amazon.nl/-/en/LEGO-Champions-77254-Collectible-Minifigure/dp/B0FPXK52K8/ref=sr_1_3?dib=eyJ2IjoiMSJ9.8risxgmwZKQiAuVyyLIcpkxo9SAFOzHKt6RVJUrxL4qQ_jITtY489nqfbl19MDj3cRvP_NulHAJD2AaUzJJcKGpli3FQ_kO3iFO6U_ZyBFPldDgcI83ZbErcK0XMB7wQrk40P5rJUR-fUpTcWJg4RUgucsLkq1hHZsfwEpCbpRjgGPcSDNv0TaIpmMNLCdP5OgIQWHeJ1ClvaI5aaKfl-xB5NQ6_xKDAd6IkOYBetQRlkUdKEQqhlV7cej06n48Bl4kUeRJJIU7RrsPJesApM-MXiysqT9SQ37ZjyVOzaPU.E8bgXOfsYfsbQ1wTunj5s5wd40rjEhUBfTwtEwlukLE&dib_tag=se&keywords=lego+ferrari&qid=1793739688&s=toys&sr=1-3"
  },
  {
    id: crypto.randomUUID(),
    name: "Arket Shopper - Black",
    imgUrl: "https://img01.ztat.net/article/spp-media-p1/56ce2d2ccc6843c4adf2f9a34e6882ce/7a7acbd251524e318c3bb57917240f88.jpg?imwidth=1800",
    link: "https://www.zalando.nl/arket-shopper-black-aru52h003-q11.html",
    favorite: true
  },
  {
    id: crypto.randomUUID(),
    name: "One Blade Pro - QP6652/30",
    imgUrl: "https://m.media-amazon.com/images/I/71lHs9ZiRiL._AC_SX679_.jpg",
    link: "https://www.amazon.nl/-/en/OneBlade-Authentic-14-Length-QP6652-30/dp/B0DC74WHYV/ref=sr_1_1?crid=2WX0RCH62XN3N&dib=eyJ2IjoiMSJ9.2tNE1H_bncCB1xYoMVi0JmPFcQxZoR_O3DJLAHGiLzCW26UlZ85Zjs1IDAboljcIHannl-tNUFBZHxhOrqsy5rHGyeL1IXZKZZ3MXDe31Sn0pKgGUugiGPMsZ40MkxPayxpAkgPyRc5FOVmSOXOBun3bXna_A8pR6JAwJXfvPU9me5EN19v389-YSTuI4BSZyPAMKVTWarT8jiRA61Fi71vCv3Ica_u0NLuDL8NX9-uzX2aateBskjIY9h4fo8uOj7alLWEfm6i2TFADpXhaKIkfufBaqMsiIxGcpRfAMvQ.QlCiIzB3P8yOPbAKU5eNd3sM6kFVZs2gsf0IblNkJWg&dib_tag=se&keywords=oneblade+pro+360+20&qid=1794341133&sprefix=oneblade+pro+360+20%2Caps%2C161&sr=8-1"
  },
  {
    id: crypto.randomUUID(),
    name: "No.12 Objets d'Amsterdam - 250ml",
    imgUrl: "https://marie-stella-maris.com/cdn/shop/files/marie-stella-maris-fragrance-sticks-objets-damsterdam-250ml-main.png?v=1777450988&width=700",
    link: "https://marie-stella-maris.com/products/fragrance-sticks-objets-damsterdam-250-ml"
  },
  {
    id: crypto.randomUUID(),
    name: "Ikea lamp - FADO",
    imgUrl: "https://www.ikea.com/nl/nl/images/products/fado-tafellamp-wit__0606976_pe682645_s5.jpg?f=u",
    link: "https://www.ikea.com/nl/nl/p/fado-tafellamp-wit-80096372/"
  },
  {
    id: crypto.randomUUID(),
    name: "Paula's Choice - 2% BHA Exfoilant",
    imgUrl: "https://media.douglas.nl/medias/cAAEOZ1253715-0-dgl-NL.jpg?context=bWFzdGVyfGltYWdlc3w5MDE2MHxpbWFnZS9qcGVnfGFESmlMMmhoWXk4NE1UVTVOREk1T1RZeE16SXhOQzlqUVVGRlQxb3hNalV6TnpFMVh6QmZaR2RzTFU1TUxtcHdad3xlMGI1MTFiZmRkZmU2OWRlZDdlZTU5YWQzZjVjYmZlMjZmZDk3YzY2NWRiNzFkNGRjNmVjNmIyNTdhOGM0ZjFl&grid=true&imPolicy=grayScaled&imdensity=1&imwidth=775",
    link: "https://www.douglas.nl/nl/p/5010162036"
  },
  {
    id: crypto.randomUUID(),
    name: "Apple USB-C oplaad kabel",
    imgUrl: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/615OpRJXjxL._AC_SL1500_.jpg",
    link: "https://www.amazon.nl/-/en/Apple-USB-Charging-Cable-240W/dp/B0DCNZGSHV/ref=sr_1_6?crid=3U5J6NV1KFL9Z&dib=eyJ2IjoiMSJ9.5bL7FYNkSYBdEIeoCeiECj8bxDRdZBdMeDXOtwnPhMtWTqq76cjyRaIrhdb8l885YNFt1gokJ9qukow52cLbP5c6emu4A9kM58f7b1ZvB3cv2INGAZXxzkzP-BD91solJxFd26oi-U9I4aDo22G-IhuvsXYFROBFuHlRIiAuKdNs51rMdq6tYj9GJp3EHU2LDT1z5DWBS1HSO8LXVNyU0-AfjWsbR26mNHepnsT948Ihbptzw5BOXdeT-zbsWWesfVxXgTHRGB4igAJx3dDeIbcLvlTR9B_nGuvpcE25qgU.cRZKSliPnih-AvOn1x2ITq9FnIYUWY229lK1bo_NV4g&dib_tag=se&keywords=apple%2Busb%2Bc%2Bcable&qid=1795033390&sprefix=apple%2Busb%2Bc%2Caps%2C153&sr=8-6&th=1"
  }
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
