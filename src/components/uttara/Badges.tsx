"use client";

import React from "react";
import { IconContext } from "react-icons";
import { GrMap } from "react-icons/gr";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbBuildingSkyscraper, TbRotateRectangle } from "react-icons/tb";
import { BadgesProps } from "@/app/config/interfaces";

const Badges: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-muted-foreground gap-8 py-2">
        {badges.map((badge, index) => (
          <>
            <div className="flex md:gap-2" key={index}>
              <IconContext.Provider value={{ size: "1.5em" }}>
                <TbRotateRectangle />
                <div className="text-base">
                  {badge.wide}m<sup>2</sup>
                </div>
              </IconContext.Provider>
            </div>
            <div className="flex md:gap-2">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <GrMap />
                <div className="text-base">{badge.address}</div>
              </IconContext.Provider>
            </div>
            <div className="flex md:gap-2">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <MdOutlineBedroomParent />
                <div className="text-base">{badge.roomtype}</div>
              </IconContext.Provider>
            </div>
            <div className="flex md:gap-2">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <TbBuildingSkyscraper />
                <div className="text-base">{badge.buildingtype}</div>
              </IconContext.Provider>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Badges;
