// URLs: data.md, "my websites and frontend projects", plus uniqform.in (data.md;
// Krishiv, 2026-10-01: live, built in collaboration). Descriptors paraphrase each
// site's own <title>/meta description. Media: captured from the sites — desktop
// 1440×900 (2026-09-30), phone 390×844 @2× and long desktop 1440×2700 (2026-10-01).
// Roles and status: Krishiv, 2026-10-01 — Technical Head on every site he built
// except Samarth Rao Studio; K2Aqua also Partner. Samarth Rao Studio and Cricket
// Republic are still in progress on preview addresses, not live domains.
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
import uniqform from "@/assets/sites/uniqform.jpg";
import uniqformLong from "@/assets/sites/uniqform-long.jpg";
import uniqformMobile from "@/assets/sites/uniqform-mobile.jpg";
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
  // "live" on its own domain, or "in-progress" on a preview address.
  status: "live" | "in-progress";
  roles: string[];
  // A line about how it was made, where Krishiv gave one.
  note?: string;
  image: StaticImageData;
  mobile: StaticImageData;
  long: StaticImageData;
  alt: string;
};

export const sites: Site[] = [
  {
    slug: "uniqform",
    name: "Uniqform",
    url: "https://uniqform.in",
    domain: "uniqform.in",
    kind: "School uniforms, books & stationery",
    status: "live",
    roles: ["Technical Head"],
    note: "Built in collaboration.",
    image: uniqform,
    mobile: uniqformMobile,
    long: uniqformLong,
    alt: "Uniqform homepage: “Ready for class” over a photo of a student packing stationery at a classroom desk, with a blue “Explore supplies” button.",
  },
  {
    slug: "sapien",
    name: "Sapien",
    url: "https://sapienlifestyle.com",
    domain: "sapienlifestyle.com",
    kind: "Footwear & activewear",
    status: "live",
    roles: ["Technical Head"],
    image: sapien,
    mobile: sapienMobile,
    long: sapienLong,
    alt: "Sapien homepage: white headline “Built for what’s next in you.” over an aerial photo of runners on a red track.",
  },
  {
    slug: "arthbrands",
    name: "Arthbrands",
    url: "https://arthbrands.com",
    domain: "arthbrands.com",
    kind: "Creative & growth consultancy",
    status: "live",
    roles: ["Technical Head"],
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
    status: "live",
    roles: ["Technical Head"],
    image: navadaGroup,
    mobile: navadaGroupMobile,
    long: navadaGroupLong,
    alt: "Navada Group homepage: a large cream italic serif “Navada” with “Group.” on a black page, thin gold rules.",
  },
  {
    slug: "navada-customs",
    name: "Navada Customs",
    url: "https://navadacustoms.com",
    domain: "navadacustoms.com",
    kind: "Custom motorcycle shop",
    status: "live",
    roles: ["Technical Head"],
    image: navadaCustoms,
    mobile: navadaCustomsMobile,
    long: navadaCustomsLong,
    alt: "Navada Customs homepage: condensed white and red “Navada Customs” lettering over a custom scrambler motorcycle.",
  },
  {
    slug: "k2aqua",
    name: "K2Aqua",
    url: "https://k2aqua.in",
    domain: "k2aqua.in",
    kind: "Water treatment solutions",
    status: "live",
    roles: ["Partner", "Technical Head"],
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
    status: "live",
    roles: ["Technical Head"],
    image: varanda,
    mobile: varandaMobile,
    long: varandaLong,
    alt: "Varanda Property homepage: navy headline “Find Your Perfect Property” beside a modern house with a pool, above a property search form.",
  },
  {
    slug: "cricket-republic",
    name: "Cricket Republic",
    url: "https://cricket-republic.spranjal18.workers.dev",
    domain: null,
    kind: "Cricket gear store, Bhopal",
    status: "in-progress",
    roles: ["Technical Head"],
    image: cricketRepublic,
    mobile: cricketRepublicMobile,
    long: cricketRepublicLong,
    alt: "Cricket Republic storefront: category thumbnails, a black “Match-ready cricket kit” banner and a lime “Find your perfect bat” prompt.",
  },
  {
    slug: "samarth-rao-studio",
    name: "Samarth Rao Studio",
    url: "https://samarth-rao-studio.vercel.app",
    domain: "samarth-rao-studio.vercel.app",
    kind: "Motion design & animation studio",
    status: "in-progress",
    roles: [],
    image: samarthRao,
    mobile: samarthRaoMobile,
    long: samarthRaoLong,
    alt: "Samarth Rao Studio homepage: heavy black headline “Some ideas only make sense moving.” beside a dark teal showreel frame.",
  },
];

export const getSite = (slug: string) => sites.find((s) => s.slug === slug);
