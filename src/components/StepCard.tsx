"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface StepProps {
  id: number;
  label: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const StepCard: React.FC<StepProps> = ({
  id,
  label,
  description,
  icon,
  iconWidth,
  iconHeight,
  index,
  isSelected,
  onClick,
}) => {
  return (
    <>
      <HoverCard openDelay={0} closeDelay={1}>
        <motion.button
          onClick={onClick}
          whileHover={{ y: -5 }}
          className="relative z-10 md:flex hidden items-center justify-center w-full">
          <HoverCardTrigger className="rounded-lg text-center">
            <div
              className={`relative ${
                isSelected ? "bg-[#FDD377]" : "bg-white"
              } rounded-full p-1`}>
              <Image
                src={icon}
                alt={label}
                height={70}
                width={70}
              />
              <div className="absolute flex items-center top-0 left-[-10px] z-10 h-8 w-8 rounded-full bg-[#FDD371]">
                <div className="w-full font-bold">{id}</div>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="flex items-center justify-center font-semibold text-xs w-40">
            {label}
          </HoverCardContent>
        </motion.button>
      </HoverCard>
      <Popover>
        <motion.div
          onClick={onClick}
          whileHover={{ y: -5 }}
          className="relative z-10 md:hidden flex items-center justify-center w-full">
          <PopoverTrigger className="rounded-lg text-center">
            <div
              className={`flex items-center h-8 w-8 rounded-full border-2 border-white ${
                isSelected ? "bg-[#FDD371]" : "bg-[#124980]"
              }`}>
              <div className="w-full font-bold text-sm md:text-gray-700 text-white">{id}</div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex items-center justify-center font-semibold text-xs text-center w-40">
            {label}
          </PopoverContent>
        </motion.div>
      </Popover>
    </>
  );
};

export default StepCard;
