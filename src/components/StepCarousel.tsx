"use client";

import React, { useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface StepItem {
  id: number;
  label: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}

const StepCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, embla] = useEmblaCarousel();

  const scrollToIndex = (index: number) => {
    if (embla) {
      embla.scrollTo(index);
      setSelectedIndex(index);
    }
  };

  return <div></div>;
};

export default StepCarousel;
