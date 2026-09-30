// URLs: data.md, "my websites and frontend projects". Descriptors paraphrase each
// site's own <title>/meta description. Media: captured from the live sites —
// desktop 1440×900 (2026-09-30), phone 390×844 @2× and long desktop 1440×2700
// (2026-10-01). Roles only where data.md pairs one with the site.
import type { StaticImageData } from "next/image";

import arthbrands from "@/assets/sites/arthbrands.jpg";
import arthbrandsLong from "@/assets/sites/arthbrands-long.jpg";
import arthbrandsMobile from "@/assets/sites/arthbrands-mobile.jpg";
import cricketRepublic from "@/assets/sites/cricket-republic.jpg";
import cricketRepublicLong from "@/assets/sites/cricket-republic-long.jpg";
import cricketRepublicMobile from "@/assets/sites/cricket-republic-mobile.jpg";
import k2aqua from "@/assets/sites/k2aqua.jpg";
import k2aquaLong from "@/assets/sites/k2aqua-long.jpg";
import k2aquaMobile from "@/assets/sites/k2aqua-mobile.jpg";
import navadaCustoms from "@/assets/sites/navada-customs.jpg";
import navadaCustomsLong from "@/assets/sites/navada-customs-long.jpg";
import navadaCustomsMobile from "@/assets/sites/navada-customs-mobile.jpg";
import navadaGroup from "@/assets/sites/navada-group.jpg";
import navadaGroupLong from "@/assets/sites/navada-group-long.jpg";
import navadaGroupMobile from "@/assets/sites/navada-group-mobile.jpg";
import samarthRao from "@/assets/sites/samarth-rao-studio.jpg";
import samarthRaoLong from "@/assets/sites/samarth-rao-studio-long.jpg";
import samarthRaoMobile from "@/assets/sites/samarth-rao-studio-mobile.jpg";
import sapien from "@/assets/sites/sapien.jpg";
import sapienLong from "@/assets/sites/sapien-long.jpg";
import sapienMobile from "@/assets/sites/sapien-mobile.jpg";
import varanda from "@/assets/sites/varanda.jpg";
import varandaLong from "@/assets/sites/varanda-long.jpg";
import varandaMobile from "@/assets/sites/varanda-mobile.jpg";

export type Site = {
  slug: string;
  name: string;
  url: string;
  // Shown as the address. null when the URL is a platform preview address
  // rather than the business's own domain (BUILD_NOTES.md, Q10).
  domain: string | null;
  kind: string;
  role?: string;
  image: StaticImageData;
  mobile: StaticImageData;
  long: StaticImageData;
  alt: string;
};

export const sites: Site[] = [
  {
    slug: "arthbrands",
    name: "Arthbrands",
    url: "https://arthbrands.com",
    domain: "arthbrands.com",
    kind: "Creative & growth consultancy",
    image: arthbrands,
    mobile: arthbrandsMobile,
    long: arthbrandsLong,
    alt: "Arthbrands homepage: the serif headline “Meaning, engineered.” in black and rust on a warm white page.",
  },
  {
    slug: "navada-group",
    name: "Navada Group",
    url: "https://navadaindia.com",
    domain: "navadaindia.com",
    kind: "Industrial group",
    image: navadaGroup,
    mobile: navadaGroupMobile,
    long: navadaGroupLong,
    alt: "Navada Group homepage: a large cream italic serif “Navada” with “Group.” on a black page, thin gold rules.",
  },
  {
    slug: "samarth-rao-studio",
    name: "Samarth Rao Studio",
    url: "https://samarth-rao-studio.vercel.app",
    domain: "samarth-rao-studio.vercel.app",
    kind: "Motion design & animation studio",
    role: "Technical Head",
    image: samarthRao,
    mobile: samarthRaoMobile,
    long: samarthRaoLong,
    alt: "Samarth Rao Studio homepage: heavy black headline “Some ideas only make sense moving.” beside a dark teal showreel frame.",
  },
  {
    slug: "sapien",
    name: "Sapien",
    url: "https://sapienlifestyle.com",
    domain: "sapienlifestyle.com",
    kind: "Footwear & activewear",
    image: sapien,
    mobile: sapienMobile,
    long: sapienLong,
    alt: "Sapien homepage: white headline “Built for what’s next in you.” over an aerial photo of runners on a red track.",
  },
  {
    slug: "navada-customs",
    name: "Navada Customs",
    url: "https://navadacustoms.com",
    domain: "navadacustoms.com",
    kind: "Custom motorcycle shop",
    image: navadaCustoms,
    mobile: navadaCustomsMobile,
    long: navadaCustomsLong,
    alt: "Navada Customs homepage: condensed white and red “Navada Customs” lettering over a custom scrambler motorcycle.",
  },
  {
    slug: "cricket-republic",
    name: "Cricket Republic",
    url: "https://cricket-republic.spranjal18.workers.dev",
    domain: null,
    kind: "Cricket gear store, Bhopal",
    image: cricketRepublic,
    mobile: cricketRepublicMobile,
    long: cricketRepublicLong,
    alt: "Cricket Republic storefront: category thumbnails, a black “Match-ready cricket kit” banner and a lime “Find your perfect bat” prompt.",
  },
  {
    slug: "k2aqua",
    name: "K2Aqua",
    url: "https://k2aqua.in",
    domain: "k2aqua.in",
    kind: "Water treatment solutions",
    role: "Partner",
    image: k2aqua,
    mobile: k2aquaMobile,
    long: k2aquaLong,
    alt: "K2Aqua homepage: serif headline “End Hard Water Problems For Good.” over a photo of water pouring into a glass.",
  },
  {
    slug: "varanda-property",
    name: "Varanda Property",
    url: "https://varandaproperties.com",
    domain: "varandaproperties.com",
    kind: "Property: buy, rent, invest",
    image: varanda,
    mobile: varandaMobile,
    long: varandaLong,
    alt: "Varanda Property homepage: navy headline “Find Your Perfect Property” beside a modern house with a pool, above a property search form.",
  },
];

export const getSite = (slug: string) => sites.find((s) => s.slug === slug);
