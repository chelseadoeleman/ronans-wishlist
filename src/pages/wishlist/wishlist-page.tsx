import { WishlistItem } from "models/wishlist";
import Snowfall from "react-snowfall";
import Card from "../../components/card";

const presents: Array<WishlistItem> = [
  {
    id: crypto.randomUUID(),
    name: "(Blackfriday) Aroma Diffuser - Terrazzo Kubus",
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
    favorite: true
  },
  {
    id: crypto.randomUUID(),
    name: "ARC'TERYX Muts",
    imgUrl: "https://www.behindthepines.eu/cdn/shop/files/Arcteryx-Grotto-Toque-Black-Void-beanie-1_720x.jpg?v=1762421444",
    link: "-	Arc’teryx Grotto Toque Black void",
  },
  {
    id: crypto.randomUUID(),
    name: "Hoesje Iphone 16 PRO",
    imgUrl: "https://image.gsmpunt.nl/product/210000/201714/lg/spigen-ultra-hybrid-apple-iphone-16-pro-hoesje-back-cover-transparant_8.webp",
    link: "https://www.gsmpunt.nl/hoesjes/spigen-ultra-hybrid-apple-iphone-16-pro-hoesje-back-cover-transparant",
  },
  {
    id: crypto.randomUUID(),
    name: "Camera protector iPhone 16 PRO",
    imgUrl: "https://image.gsmpunt.nl/product/230000/220710/lg/esr-armorite-iphone-17-pro-max-16-pro-max-camera-lens-protector-transparant_1.webp",
    link: "https://www.gsmpunt.nl/screen-protectors/esr-armorite-iphone-17-pro-max-16-pro-max-camera-lens-protector-transparant",
  },
  {
    id: crypto.randomUUID(),
    name: "(Blackfriday Alleen in de korting :)) ETQ LT01 Nubuck Jet Black, 41",
    imgUrl: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-Flatlay6Okt-20607_v1crob_1080x.png?v=1737629929",
    link: "https://www.etq-amsterdam.com/nl/products/lt-01-shades-nubuck-jet-black",
  },
  {
    id: crypto.randomUUID(),
    name: "(Blackfriday Alleen in de korting :)) ETQ LT01 Suede Jet Black, 41",
    imgUrl: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ_250115_Fitpics_05_1080x.png?v=1763498932",
    link: "https://www.etq-amsterdam.com/nl/products/lt-01-shades-suede-jet-black",
  },
  {
    id: crypto.randomUUID(),
    name: "(Blackfriday Alleen in de korting :)) ETQ LT01 Suede Blueberry, 41",
    imgUrl: "https://www.etq-amsterdam.com/cdn/shop/files/ETQ-Flatlay6Okt-20719_v1crob_eae1d304-3319-45e7-8afb-0e5d22df4e2f_1080x.png?v=1763211404",
    link: "https://www.etq-amsterdam.com/nl/products/lt-01-shades-suede-blueberry",
  },
  {
    id: crypto.randomUUID(),
    name: "(Blackfriday Alleen in de korting :)) Scarosso Luciano Brown Suede, 40,5",
    imgUrl: "https://www.scarosso.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-17/default/dw0e33add8/images/zoom/LUCIANOLOAF_BROSUED_01.jpg?sw=1984&sh=2728&sm=fit",
    link: "https://www.scarosso.com/en-nl/men/shoes/loafers/luciano-brown-suede-LUCIANOLOAFBROSUED.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Navy Merino Long Sleeve Polo (denk maat: M) Moet eventueel passen of het goed zit :)",
    imgUrl: "https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_500px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_1690,h_2338,f_auto,q_auto,fl_progressive/products/knitwear/default/SW1681_25.jpg",
    link: "https://suitsupply.com/en-nl/men/knitwear/navy-merino-long-sleeve-polo/SW1681.html",
  },
  {
    id: crypto.randomUUID(),
    name: "La Roche-Posay gezichtscreme",
    imgUrl: "https://media.douglas.nl/medias/mhiOo3202936-0-dgl-NL.jpg?context=bWFzdGVyfGltYWdlc3w1NDE1NXxpbWFnZS9qcGVnfGFHUXlMMmhtTkM4Mk5EUXpNRGsxTXpJd01UWTVOQzl0YUdsUGJ6TXlNREk1TXpaZk1GOWtaMnd0VGt3dWFuQm58MDA0NzgwMDEzM2I2N2IyYWMxNjAxZDFmNTM0ODY5YWVjNTVjYjE4ZGU4NWI5N2NmM2MyZWE0YmJiNmEzMDQxMg&grid=true&imPolicy=grayScaled&imdensity=1&imwidth=775",
    link: "https://www.douglas.nl/nl/p/5010955375",
  },
    {
    id: crypto.randomUUID(),
    name: "Toilettas Rains Large - Black",
    imgUrl: "https://img01.ztat.net/article/spp-media-p1/7ca94e5578aa403599537fd913e6b533/3e1a874c4ee14f618d01b1b27c46b0ee.jpg?imwidth=1800&filter=packshot",
    link: "https://www.zalando.nl/rains-wash-bag-large-unisex-toilettas-black-ri054h01k-q11.html",
  },
    {
    id: crypto.randomUUID(),
    name: "Custom Vinyl Plate Gift Card ",
    imgUrl: "https://i.etsystatic.com/24452942/r/il/a50653/2465788740/il_fullxfull.2465788740_kimi.jpg",
    link: "https://www.dubplate.be/nl/vinylplaat-bestellen/coupon",
    favorite: true,
  },
    {
    id: crypto.randomUUID(),
    name: "Wijde Joggingbroek Uniqlo zwart, S",
    imgUrl: "https://image.uniqlo.com/UQ/ST3/eu/imagesgoods/471809/item/eugoods_09_471809_3x4.jpg?width=400",
    link: "https://www.uniqlo.com/nl/nl/products/E471809-000/00?colorDisplayCode=09&sizeDisplayCode=004",
  },
    {
    id: crypto.randomUUID(),
    name: "Yeti Rambler - Stainless Steel 26 Oz.",
    imgUrl: "https://nl.yeti.com/cdn/shop/files/21071200017_70000000483_21071200025_Drinkware_BottleChug_26oz_SS_Studio_Back.png?v=1750778363&width=1346",
    link: "https://nl.yeti.com/products/rambler-26-bottle-with-chug-cap-stainless-steel",
  },
    {
    id: crypto.randomUUID(),
    name: "Ikea lamp FADO 25cm",
    imgUrl: "https://www.ikea.com/nl/nl/images/products/fado-tafellamp-wit__0606976_pe682645_s5.jpg?f=xl",
    link: "https://www.ikea.com/nl/nl/p/fado-tafellamp-wit-80096372/",
  },
    {
    id: crypto.randomUUID(),
    name: "(Blackfriday) Philips HUE E27 - 2+1 gratis ",
    imgUrl: "https://media.s-bol.com/q9xq93J9R1Ek/zrkzgZ/550x482.jpg",
    link: "https://www.bol.com/nl/nl/p/philips-hue-standaardlamp-e27-lichtbron-wit-en-gekleurd-licht-1-pack-1100lm-bluetooth/9300000046063484/?cid=1764173879053-8722908439472",
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
