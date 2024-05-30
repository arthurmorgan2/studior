"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ReactNode } from "react";

const Background = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    "/assets/images/portofolio/uttara/uttara-4.png",
    "/assets/images/portofolio/renflorist/renflorist-2.png",

    // Add more background image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <div className="relative min-h-[570px]">
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
          </div>
        </CSSTransition>
      ))}
      {children}
    </div>
  );
};

export default Background;
