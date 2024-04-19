import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const Images = [
    {
      name: "bedroom",
      src: "/asets/image/bedroom.jpg",
    },
    {
      name: "livingroom",
      src: "/asets/image/livingroom.jpg",
    },
    {
      name: "kitchen",
      src: "/asets/image/kitchen.jpg",
    },
  ];

  return (
    <>
      <div className="text-secondary text-2xl">TES</div>
    </>
  );
}
