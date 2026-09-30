// URLs: data.md, "my websites and frontend projects". Descriptors paraphrase each
// site's own <title>/meta description. Screenshots: captured from the live sites
// (1440×900) on 2026-09-30.
import type { StaticImageData } from "next/image";

import arthbrands from "@/assets/sites/arthbrands.jpg";
import cricketRepublic from "@/assets/sites/cricket-republic.jpg";
import k2aqua from "@/assets/sites/k2aqua.jpg";
import navadaCustoms from "@/assets/sites/navada-customs.jpg";
import navadaGroup from "@/assets/sites/navada-group.jpg";
import samarthRao from "@/assets/sites/samarth-rao-studio.jpg";
import sapien from "@/assets/sites/sapien.jpg";
import varanda from "@/assets/sites/varanda.jpg";

export type Site = {
  name: string;
  url: string;
  // Shown under the card. null when the address is a platform preview URL
  // rather than the business's own domain (BUILD_NOTES.md, Q10).
  domain: string | null;
  kind: string;
  image: StaticImageData;
  alt: string;
};

export const sites: Site[] = [
  {
    name: "Arthbrands",
    url: "https://arthbrands.com",
    domain: "arthbrands.com",
    kind: "Creative & growth consultancy",
    image: arthbrands,
    alt: "Arthbrands homepage: the serif headline “Meaning, engineered.” in black and rust on a warm white page.",
  },
  {
    name: "Navada Group",
    url: "https://navadaindia.com",
    domain: "navadaindia.com",
    kind: "Industrial group",
    image: navadaGroup,
    alt: "Navada Group homepage: a large cream italic serif “Navada” with “Group.” on a black page, thin gold rules.",
  },
  {
    name: "Samarth Rao Studio",
    url: "https://samarth-rao-studio.vercel.app",
    domain: "samarth-rao-studio.vercel.app",
    kind: "Motion design & animation studio",
    image: samarthRao,
    alt: "Samarth Rao Studio homepage: heavy black headline “Some ideas only make sense moving.” beside a dark teal showreel frame.",
  },
  {
    name: "Sapien",
    url: "https://sapienlifestyle.com",
    domain: "sapienlifestyle.com",
    kind: "Footwear & activewear",
    image: sapien,
    alt: "Sapien homepage: white headline “Built for what’s next in you.” over an aerial photo of runners on a red track.",
  },
  {
    name: "Navada Customs",
    url: "https://navadacustoms.com",
    domain: "navadacustoms.com",
    kind: "Custom motorcycle shop",
    image: navadaCustoms,
    alt: "Navada Customs homepage: condensed white and red “Navada Customs” lettering over a custom scrambler motorcycle.",
  },
  {
    name: "Cricket Republic",
    url: "https://cricket-republic.spranjal18.workers.dev",
    domain: null,
    kind: "Cricket gear store, Bhopal",
    image: cricketRepublic,
    alt: "Cricket Republic storefront: category thumbnails, a black “Match-ready cricket kit” banner and a lime “Find your perfect bat” prompt.",
  },
  {
    name: "K2Aqua",
    url: "https://k2aqua.in",
    domain: "k2aqua.in",
    kind: "Water treatment solutions",
    image: k2aqua,
    alt: "K2Aqua homepage: serif headline “End Hard Water Problems For Good.” over a photo of water pouring into a glass.",
  },
  {
    name: "Varanda Property",
    url: "https://varandaproperties.com",
    domain: "varandaproperties.com",
    kind: "Property: buy, rent, invest",
    image: varanda,
    alt: "Varanda Property homepage: navy headline “Find Your Perfect Property” beside a modern house with a pool, above a property search form.",
  },
];
