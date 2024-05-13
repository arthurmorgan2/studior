"use client";

import React from "react";
import { Button } from "./ui/button";
import { HiArrowLongRight } from "react-icons/hi2";
import { IconContext } from "react-icons";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface PortoProps {
  id: number;
  name: string;
  categories: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  isReversedLayout?: boolean;
}

const PortoCard: React.FC<PortoProps> = ({
  id,
  name,
  categories,
  year,
  description,
  image,
  alt,
  isReversedLayout,
}) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-8 gap-4">
        <div
          className={`w-full flex items-center lg:col-span-3 md:col-span-2 col-span-0 relative ${
            isReversedLayout ? "lg:order-last" : ""
          }`}>
          <div className="w-full h-[200px]">
            <Image src={image} alt={alt} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center md:gap-4 gap-2 lg:py-12 md:py-8">
          <h1 className="md:text-4xl text-2xl font-bold tracking-wide">
            {name}
          </h1>
          <p className="md:text-base text-xs text-muted-foreground">
            {description}
          </p>
          <div className="flex lg:pt-16 pt-0">
            <Button
              variant="link"
              className="flex gap-3 font-bold text-xl p-0 hover:text-[#124980]">
              View Project
              <IconContext.Provider value={{ size: "1.5em" }}>
                <HiArrowLongRight />
              </IconContext.Provider>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortoCard;
