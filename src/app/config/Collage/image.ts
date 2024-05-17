import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/images/portofolio/uttara/uttara-1.png",
    original: "/assets/images/portofolio/uttara/uttara-1.png",
    width: 800,
    height: 1000,
    caption: "Uttara-1",
  },
  {
    src: "/assets/images/portofolio/uttara/uttara-2.png",
    original: "/assets/images/portofolio/uttara/uttara-2.png",
    width: 1499,
    height: 1000,
    caption: "Uttara-2",
  },
  {
    src: "/assets/images/portofolio/uttara/uttara-3.png",
    original: "/assets/images/portofolio/uttara/uttara-3.png",
    width: 1058,
    height: 706,
    caption: "Uttara-3",
  },
  {
    src: "/assets/images/portofolio/uttara/uttara-4.png",
    original: "/assets/images/portofolio/uttara/uttara-4.png",
    width: 1053,
    height: 702,
    caption: "Uttara-4",
  },
  {
    src: "/assets/images/portofolio/uttara/uttara-5.png",
    original: "/assets/images/portofolio/uttara/uttara-5.png",
    width: 910,
    height: 703,
    caption: "Uttara-5",
  },
];
