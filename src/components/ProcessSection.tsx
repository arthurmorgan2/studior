"use client";

import { STEP_ITEM } from "@/app/config/stepData";
import React, { useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import StepCard from "./StepCard";
import Image from "next/image";

const ProcessSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, embla] = useEmblaCarousel();

  const scrollToIndex = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
      setSelectedIndex(index);
    }
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl md:px-20">
      <div className="flex flex-col justify-start w-full text-gray-700 md:gap-8 gap-4 pt-8">
        <h1 className="md:text-4xl text-xl font-bold text-center">
          6 Langkah Menuju Interior Impianmu
        </h1>
        <div className="relative grid grid-cols-6 text-center">
          {STEP_ITEM.map((item, index) => (
            <StepCard
              key={index}
              index={index}
              id={item.id}
              label={item.label}
              description={item.description}
              icon={item.icon}
              iconWidth={item.iconWidth}
              iconHeight={item.iconHeight}
              isSelected={index === selectedIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
          <div className="absolute md:top-9 top-3.5 lg:left-14 sm:left-12 left-9 lg:w-[90%] w-[85%] border-t-2 "></div>
        </div>
      </div>
      <div className="lg:flex items-center justify-center w-full pt-4">
        <div className="embla relative">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {STEP_ITEM.map((item, index) => (
                <div key={index} className="embla__slide">
                  <div className="flex flex-col items-center justify-evenly h-full pb-4">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={400}
                    />
                    <div className="flex md:w-[60%] w-4/5 justify-center items-center text-center border p-4 mt-4 rounded-lg shadow-xl">
                      <p className="md:text-lg text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
