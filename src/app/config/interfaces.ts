export interface Badge {
  wide: string;
  address: string;
  roomtype: string;
  buildingtype: string;
}

export interface Image {
  src: string;
  original: string;
  width: number;
  height: number;
  caption?: string;
}

export interface PortoItem {
  id: number;
  name: string;
  address: string;
  slug: string;
  categories: string;
  year: string;
  description: string;
  badges: Badge[];
  image: Image[];
  url: string;
  alt: string;
}

export interface CarouselProps {
  images: Image[];
}

export interface BadgesProps {
  badges: Badge[];
}

export interface CollageProps {
  images: Image[];
}
