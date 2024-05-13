"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "./ui/button";
import Link from "next/link";

const Banner = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "/assets/images/portofolio/uttara/uttara-4.png",
    "/assets/images/portofolio/renflorist/renflorist-2.png",

    // Add more background image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <div className="relative min-h-[550px]">
      {backgrounds.map((background, index) => (
        <CSSTransition
          key={index}
          in={index === backgroundIndex}
          timeout={500}
          classNames="fade"
          unmountOnExit>
          <div className="absolute inset-0">
            <Image
              src={background}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </CSSTransition>
      ))}
      <div className="absolute inset-0 flex md:pt-28 pt-24">
        <MaxWidthWrapper>
          <div className="grid md:grid-cols-2 md:grid-rows-6 text-white">
            <div className="flex flex-col justify-center md:items-start items-center row-span-5 md:text-start text-center">
              <h1 className="lg:text-6xl text-4xl font-bold mb-4">
                Design Your Best Place to Live and Inspire With us
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                soluta, ducimus eum explicabo voluptatum reiciendis nemo
              </p>
              <Link href="#why" scroll={true}>
                <Button
                  variant="ghost"
                  className="font-bold tracking-widest bg-[#124980] mt-8 px-6 py-3">
                  Let{"'"}s Dive In!
                </Button>
              </Link>
            </div>
            <div className="flex justify-center items-center row-span-5 md:pt-0 pt-12">
              Carousel Content
            </div>
            {/* <div className="flex justify-center items-center w-full md:col-span-2">
              tes
            </div> */}
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Banner;
