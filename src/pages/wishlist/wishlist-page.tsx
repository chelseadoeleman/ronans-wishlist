import { WishlistItem } from "models/wishlist";
import Snowfall from "react-snowfall";
import Card from "../../components/card";

const presents: Array<WishlistItem> = [
  // {
  //   id: crypto.randomUUID(),
  //   name: "A.N. Other OR/18 (50 ML)",
  //   imgUrl:
  //     "https://cdn-1.debijenkorf.nl/web_detail_2x/a-n-other-or-2018-parfum/?reference=064/080/0640809002800000_pro_flt_frt_01_1108_1528_6272906.jpg",
  //   link: "https://an-other.com/shop/or2018/",
  //   favorite: true,
  // },
  // {
  //   id: crypto.randomUUID(),
  //   name: "Missoma - Oorbellen",
  //   imgUrl:
  //     "https://www.missoma.com/cdn/shop/products/dome-gemstone-mini-hoop-earring-set-layering-sets-missoma-18ct-gold-plated-vermeil-568535.jpg?v=1666116452&width=1400",
  //   link: "https://www.missoma.com/products/dome-and-gemstone-mini-hoop-earring-set",
  // },
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
  {
    id: crypto.randomUUID(),
    name: "Franky Amsterdam Elvira Hoops",
    imgUrl:
      "https://www.frankyamsterdam.com/cdn/shop/files/DB9A4844.jpg?v=1753350713&width=3000",
    link: "https://www.frankyamsterdam.com/nl-nl/products/de-elvira-hoops-gold-plated",
    favorite: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Blauw lichtfilter bril H&M",
    imgUrl:
      "https://image.hm.com/assets/hm/1a/13/1a13de48ecbe3799dbe864142bbfdddc2b78be11.jpg?imwidth=2160",
    link: "https://www2.hm.com/nl_nl/productpage.1288725001.html",
    favorite: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Bijdrage voor Braadpaan Le Creuset (Thyme, Ø31)",
    imgUrl:
      "https://www.lecreuset.nl/dw/image/v2/BDSR_PRD/on/demandware.static/-/Sites-master-catalog-LC/default/dwd5ebec86/images/beaverHires/FULL_HD_PNG/20240516_GS_21178311734441_100.png?sw=765&sh=575&sm=fit",
    link: "https://www.lecreuset.nl/nl_NL/p/braadpan-ovaal-in-geemailleerd-gietijzer/CI1178.html?dwvar_CI1178_color=thyme&dwvar_CI1178_size=31cm-l6-3",
  },
  {
    id: crypto.randomUUID(),
    name: "Bijdrage voor keukenmachine Kitchen Aid",
    imgUrl: "https://image.coolblue.nl/max/2048xauto/products/1407061",
    link: "https://www.coolblue.nl/product/858042/kitchenaid-artisan-mixer-5ksm175ps-inkt-blauw.html?aw_link=0&aw_subid=xid%3Afr1762530173497ubx&awc=85161_1762530173_18018c16ca67232fc6d77bc4fbe08786&clickref=85161_1762530173_18018c16ca67232fc6d77bc4fbe08786&cmt=c_aw%2Capm_Comparison%20Engine%2Cacid_85161%2Cacr_329213%2Caclr_85161_1762530173_18018c16ca67232fc6d77bc4fbe08786&ref=293530",
  },
  {
    id: crypto.randomUUID(),
    name: "Button cover Claire (white)",
    imgUrl:
      "https://www.buttonamsterdam.com/cdn/shop/files/5S7A1509.jpg?v=1761903547&width=1946",
    link: "https://www.buttonamsterdam.com/products/claire-1-set?variant=56017408852293",
  },
  {
    id: crypto.randomUUID(),
    name: "Waterglazen Ferm Living",
    imgUrl:
      "https://cdn-1.debijenkorf.nl/web_detail_2x/ferm-living-ripple-verrines-glazen-set-van-4/?reference=083/040/0830409001300000_pro_flt_frt_02_1108_1528_6338986.jpg",
    link: "https://www.debijenkorf.nl/d/ferm-living-ripple-verrines-glazen-set-van-4-8304090013-830409001300000?query=fh_location%3D%2F%2Fcatalog01%2Fnl_NL%2Fcategories%3C%7Bcatalog01_120%7D%2Fcategories%3C%7Bcatalog01_120_1240%7D%2Fcategories%3C%7Bcatalog01_120_1240_6140%7D%26fh_start_index%3D48",
  },
  {
    id: crypto.randomUUID(),
    name: "Staafmixer Braun MultiQuick 5 Pro",
    imgUrl: "https://media.s-bol.com/nkvRZPJB57qp/rkmQKKk/550x450.jpg",
    link: "https://www.bol.com/nl/nl/p/braun-multiquick-5-pro-mq55-755m-staafmixer/9300000179002222/?s2a=&bltgh=l5al--sQzIHo068HDTBFqQ.4_63_64.65.FeatureOptionButton#productTitle",
  },
  {
    id: crypto.randomUUID(),
    name: "Weekendtas (48L)",
    imgUrl: "https://media.s-bol.com/j1Qqqr3k0jV5/r0Wm5y2/550x544.jpg",
    link: "https://www.bol.com/nl/nl/p/tan-tomi-reistas-sporttas-voor-dames-en-heren-46-23-46-cm-met-smart-sleeve-voor-op-een-koffer-handbagage-tas-met-schoenenvak-en-afneembare-schouderband-donkergrijs/9300000245915414/?s2a=#productTitle",
  },
  {
    id: crypto.randomUUID(),
    name: "Pyjama top Lounge (Nerts, XS)",
    imgUrl:
      "https://nl.lounge.com/cdn/shop/files/1MinkWafflePyjamaTopImaani_59042ee8-0cea-4e40-947c-d19b26556f86.jpg?crop=center&format=webp&height=1358&quality=80&v=1735030723&width=1358",
    link: "https://nl.lounge.com/products/waffle-pyjama-top-mink",
  },
  {
    id: crypto.randomUUID(),
    name: "Pyjama broek Lounge (Nerts, S)",
    imgUrl:
      "https://nl.lounge.com/cdn/shop/files/1MinkWafflePyjamaTrousersImaani_2df6c78e-b3fe-4e56-8608-a9102b71e9a0.jpg?crop=center&format=webp&height=1358&quality=80&v=1735030722&width=1358",
    link: "https://nl.lounge.com/products/waffle-pyjama-trousers-mink",
  },
  {
    id: crypto.randomUUID(),
    name: "Quotrell Zip-up hoodie (Light grey/Melee blue, S)",
    imgUrl:
      "https://quotrell.com/cdn/shop/files/HS73748_9844_01_men_644ee034-8493-441d-a2a5-a89a1d854a5d.jpg?v=1760518246&width=3000",
    link: "https://quotrell.com/products/creators-zip-hoodie-light-grey-melee-blu",
  },
  {
    id: crypto.randomUUID(),
    name: "Eme studios hoodie (Navy, S)",
    imgUrl:
      "https://emestudios.com/cdn/shop/files/EME46_a002326b-da3f-48a4-b423-e470a9f2b4a2.webp?v=1750240461",
    link: "https://emestudios.com/en-be/products/roots-navy-oversized-hoodie",
  },
  {
    id: crypto.randomUUID(),
    name: "Astrid & Miyu Orbit crystal studs",
    imgUrl:
      "https://www.astridandmiyu.com/cdn/shop/files/AM25-Q4F-C-ST-CRYS-G_2.jpg?v=1760013152&width=1512",
    link: "https://www.astridandmiyu.com/products/orbit-crystal-studs-in-gold",
  },

  {
    id: crypto.randomUUID(),
    name: "Hourglass blush (Luminous Flush)",
    imgUrl:
      "https://cdn-1.debijenkorf.nl/web_detail_2x/hourglass-ambientTM-lighting-blush/?reference=031/460/0314609000600000_pro_flt_frt_01_1108_1528_4156529.jpg",
    link: "https://www.debijenkorf.nl/d/hourglass-ambient-lighting-blush-3146090006-314609000600000?query=fh_location%3D%2F%2Fcatalog01%2Fnl_NL%2F%24s%3Dhourglass%5Cu0020blush",
  },

  {
    id: crypto.randomUUID(),
    name: "Leave-in conditioner Color Wow",
    imgUrl:
      "https://media.iciparisxl.nl/medias/prd-front-1311351-954x1192.jpg?context=bWFzdGVyfHByZC1pbWFnZXN8OTc2Njh8aW1hZ2UvanBlZ3xhRFkxTDJoall5OHhNRGs0TXpRNU1EQXlOelUxTUM5d2NtUXRabkp2Ym5RdE1UTXhNVE0xTVY4NU5UUjRNVEU1TWk1cWNHY3wyNTI3ZTE2ZjVlYjE0YjViNjg2OGVjMjFhNzYxNDI2MmM1OTQ4MTkwMzIzNzkwMjgyZDgyOWNlMGQ5MjZlOGMy",
    link: "https://www.iciparisxl.nl/color-wow/care/money-mist/p/BP_1311351",
  },
  {
    id: crypto.randomUUID(),
    name: "LEGO Jurassic World Switch",
    imgUrl: "https://media.s-bol.com/8LxlnNLY2YpL/Mj9606O/738x1200.jpg",
    link: "https://www.mediamarkt.nl/nl/product/_lego-jurassic-world-nintendo-switch-1634821.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Nintendo Switch stuurset",
    imgUrl:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_163876141?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800",
    link: "https://www.mediamarkt.nl/nl/product/_nintendo-switch-joy-con-stuurset-1493413.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Super Mario Party: Jamboree",
    imgUrl: "https://media.s-bol.com/mWO7VZR3rM79/R6wQMjO/518x840.jpg",
    link: "https://www.bol.com/nl/nl/p/super-mario-party-jamboree-nintendo-switch/9300000182274279/?bltgh=vLC-nBDLIpDLFZiCujtCVQ.2_92.95.ProductImage",
  },

  {
    id: crypto.randomUUID(),
    name: "The Book That Wouldn’t Burn - Mark Lawrence",
    imgUrl:
      "https://somanypages.nl/wp-content/uploads/2023/05/The-Book-That-Wouldnt-Burn.jpg.webp",
    link: "https://somanypages.nl/young-adult-boeken/the-book-that-wouldnt-burn/",
  },
  {
    id: crypto.randomUUID(),
    name: "If We Were Villains - M.L. Rio",
    imgUrl:
      "https://somanypages.nl/wp-content/uploads/2023/05/9781803364919.jpg.webp",
    link: "https://somanypages.nl/young-adult-boeken/if-we-were-villains-illustrated-edition/",
  },
  {
    id: crypto.randomUUID(),
    name: "Fluffy sokken (36)",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/df4f3e7518c9470d9b0b6c05113cec38/6fa9d013fd734dc69eb28f940d870c10.jpg?imwidth=1800&filter=packshot",
    link: "https://www.zalando.nl/camano-women-cosy-socks-4-pack-sokken-taupe-c5181f024-b11.html",
  },

  {
    id: crypto.randomUUID(),
    name: "Dune messiah - Frank Herbert",
    imgUrl: "https://media.s-bol.com/xx4KW114Y2Gl/ER02VDW/550x830.jpg",
    link: "https://www.bol.com/nl/nl/p/dune-dune-messiah/9300000078350818/?bltgh=9e04ffa7-2085-4484-a0c0-10f6935c0f72.wishlist_details_page_products.WishlistDetailProductCardItem_35.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "Children of dune - Frank Herbert",
    imgUrl: "https://media.s-bol.com/gEzPRY7wvo06/xk2Ppwz/550x830.jpg",
    link: "https://www.bol.com/nl/nl/p/dune-children-of-dune/9300000078350848/?bltgh=9e04ffa7-2085-4484-a0c0-10f6935c0f72.wishlist_details_page_products.WishlistDetailProductCardItem_36.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "Barbour Sjaal (Classic tartan)",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/18d453758dcf468b9822708c7f787276/62ae766869e346d0a628cdbd24d1a6e0.jpg?imwidth=156&filter=packshot",
    link: "https://www.zalando.nl/barbour-sjaal-classic-tartan-ba251g009-t11.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Bruine handschoenen (XS/S)",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/210cb7df7bbe41e39232415288222fd7/7b82cff6a2c54ea395b65656aeb155aa.jpg?imwidth=1800&filter=packshot",
    link: "https://www.zalando.nl/massimo-dutti-handschoenen-brown-m3i51g0f5-o11.html",
  },
  {
    id: crypto.randomUUID(),
    name: "Nike Air force 1 07 (36.5)",
    imgUrl:
      "https://img01.ztat.net/article/spp-media-p1/ad0a8ed9cd264baea11cb56b8b3e7b52/f0906d2915e64dec8043520a2498adcf.jpg?imwidth=1800",
    link: "https://www.zalando.nl/nike-sportswear-air-force-1-sneakers-laag-white-ni111a0xd-a11.html",
  },

  {
    id: crypto.randomUUID(),
    name: "Lego Eeyore",
    imgUrl: "https://media.s-bol.com/mmkVw3NArADr/82NR5A3/550x547.jpg",
    link: "https://www.bol.com/nl/nl/p/lego-disney-winnie-de-poeh-brickheadz-40797-iejoor-eeyore/9300000224708274/?cid=1762533760166-1252039061974&bltgh=49c3bffb-f02f-4ce5-8a57-b92a1f75cb58.wishlist_details_page_products.WishlistDetailProductCardItem_2.ProductTitle",
  },
  {
    id: crypto.randomUUID(),
    name: "The Fellowship of the Ring, J. R. R. Tolkien",
    imgUrl: "https://media.s-bol.com/xmk26qJoJL2r/MkvzLP/536x840.jpg",
    link: "https://www.bol.com/nl/nl/p/the-lord-of-the-rings-the-fellowship-of-the-ring/9300000109083117/?cid=1762533828296-7456982478045&bltgh=4668c4b3-bfef-4e71-a9a4-9b6ef787a46d.wishlist_details_page_products.WishlistDetailProductCardItem_43.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "The Two Towers, J. R. R. Tolkien",
    imgUrl: "https://media.s-bol.com/NnXyKDQV71Bm/6Z2Ow9/528x840.jpg",
    link: "https://www.bol.com/nl/nl/p/the-lord-of-the-rings-the-two-towers/9300000109083633/?cid=1762533836162-1494496177914&bltgh=jkmSA6SF9XZ6Ddd9qjZIPg.4_31.32.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "The Return of the King, J. R. R. Tolkien",
    imgUrl: "https://media.s-bol.com/B7OjXgy0NnlJ/J5l3MD/759x1200.jpg",
    link: "https://www.bol.com/nl/nl/p/the-lord-of-the-rings-the-return-of-the-king/9300000109083521/?cid=1762533873569-5337100518110&bltgh=v2YyEqVT16mhs0oHbglB0Q.4_29.31.ProductImage",
  },

  {
    id: crypto.randomUUID(),
    name: "The Let Them Theory, Mel Robbins",
    imgUrl: "https://media.s-bol.com/RmxEYBP9lYEK/1wkLY4q/550x830.jpg",
    link: "https://www.bol.com/nl/nl/p/the-let-them-theory/9300000184132966/?cid=1762533981990-8134042722739&bltgh=herjlXxfts8lwUC75CxJ-A.4_43.46.ProductImage",
  },
  {
    id: crypto.randomUUID(),
    name: "The Alchemist, Paulo Coelho",
    imgUrl: "https://media.s-bol.com/9EN6EoPO1QGz/5yABKz8/547x840.jpg",
    link: "https://media.s-bol.com/9EN6EoPO1QGz/5yABKz8/547x840.jpg",
  },

  {
    id: crypto.randomUUID(),
    name: "Summer Fridays lip balm (Vanilla beige)",
    imgUrl:
      "https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/13322273-1345154609788442.jpg&format=webp&auto=avif&width=1200&height=1200&fit=cover&dpr=2",
    link: "https://www.cultbeauty.com/p/summer-fridays-lip-butter-balm-15g-various-shades/13322271/",
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
          <h1>Christmas Wishlist</h1>
          <p>By Chelsea</p>
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
