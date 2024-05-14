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
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-start w-full gap-4 md:gap-8 md:px-8 px-2.5 py-6 text-white bg-[#124980]">
          <h1 className="md:text-6xl text-4xl font-bold text-start">
            OUR PROCESS
          </h1>
          <p className="md:text-lg text-xs leading-relaxed">
            At Studior, we understand that every space tells a story, and we
            {"'"}re here to help you craft yours. Our interior design process is
            a seamless journey from initial inspiration to the realization of
            your dream space. Here{"'"}s how we make it happen:
          </p>
          <div className="relative grid grid-cols-3 md:gap-4 gap-4 text-center">
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
            <div className="absolute md:top-[4.3rem] sm:top-[3.2rem] top-[2.6rem] w-full">
              <div className="flex justify-center">
                <div className="lg:w-[340px] md:w-[480px] sm:w-[470px] w-[210px] md:h-40 sm:h-32 h-28 border-y-2 border-r-2 border-[#FDD371]"></div>
              </div>
              <div className="flex justify-center">
                <div className="lg:w-[340px] md:w-[480px] sm:w-[470px] w-[210px] md:h-40 sm:h-32 h-24 border-l-2 border-[#FDD371]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center justify-center w-full">
          <div className="embla relative">
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
                {STEP_ITEM.map((item, index) => (
                  <div
                    key={index}
                    className="embla__slide flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="stepper flex">
              {STEP_ITEM.map((_, index) => (
                <StepButton
                  key={index}
                  index={index}
                  isSelected={index === selectedIndex}
                  onClick={() => scrollToIndex(index)}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
