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

interface CardProps {
  label: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
}

const Card: React.FC<CardProps> = ({
  label,
  description,
  icon,
  iconWidth,
  iconHeight,
}) => {
  return (
    <>
      <HoverCard openDelay={0} closeDelay={1}>
        <motion.div whileHover={{ y: -5 }} className="hidden lg:flex w-72 justify-center">
          <HoverCardTrigger className="grid lg:grid-cols-2 rounded-lg shadow-lg text-center w-full py-3 border">
            <motion.div
              whileHover={{ y: -5 }} // Move 5 pixels upward on hover
              className="flex items-center justify-center">
              <Image
                src={icon}
                alt={label}
                height={iconWidth}
                width={iconHeight}
              />
            </motion.div>
            <div className="flex items-center lg:justify-start justify-center">
              <div className="font-bold lg:text-left text-center tracking-wider lg:text-sm text-xs italic">
                {label}
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="flex items-center justify-center font-semibold text-xs text-center">
            {description}
          </HoverCardContent>
        </motion.div>
      </HoverCard>
      <Popover>
        <motion.div whileHover={{ y: -5 }} className="lg:hidden flex">
          <PopoverTrigger className="flex flex-col gap-2 items-center justify-center rounded-lg shadow-lg w-full py-3 border">
            <motion.div
              whileHover={{ y: -5 }} // Move 5 pixels upward on hover
              className="flex justify-center items-center">
              <Image
                src={icon}
                alt={label}
                height={iconWidth}
                width={iconHeight}
              />
            </motion.div>
            <div className="flex items-center justify-center lg:justify-start h-full">
              <div className="font-bold text-center tracking-wider lg:text-sm text-xs italic">
                {label}
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex items-center justify-center font-semibold text-xs text-center">
            {description}
          </PopoverContent>
        </motion.div>
      </Popover>
    </>
  );
};

export default Card;
