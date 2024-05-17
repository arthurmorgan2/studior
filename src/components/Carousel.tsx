import React from "react";
import { CarouselProps } from "@/app/config/interfaces";
import Image from "next/image";

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="flex justify-center relative">
      <div className="flex overflow-x-auto max-h-[570px]">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt="image"
            width={900}
            height={600}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
