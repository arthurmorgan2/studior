"use client";
import { NAV_ITEMS } from "@/app/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
type navItem = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navItem: navItem;
  handleOpen: () => void;
  close: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({
  isAnyOpen,
  navItem,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const gridColsClass =
    navItem.label === "Categories" ? "grid-cols-4" : "grid-cols-3";
  const hiddenButton = navItem.label === "Categories" ? "hidden" : "flex";
  return (
    <div className="flex">
      <div className="relative flex items-center group">
        <Button
          className="gap-1.5 font-bold tracking-widest"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}>
          {navItem.label}
          <ChevronDown
            className={cn(
              "md:h-4 h-6 md:w-4 w-6 transition-all text-muted-foreground text-white group-hover:text-gray-500",
              {
                "-rotate-180 text-gray-500": isOpen,
              }
            )}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}>
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div
                  className={`col-span-4 col-start-1 grid ${gridColsClass} gap-x-8 gap-y-8`}>
                  {navItem.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className="group relative text-sm md:text-lg">
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 shadow-lg">
                        <Image
                          src={item.imageSrc}
                          alt="product category image"
                          fill
                          className="object-fit object-center"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900">
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore culpa eveniet reiciendis, aliquid ea hic quia
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`${hiddenButton} items-center justify-center md:py-4 py-0`}>
                <Button
                  className="text-lg hover:text-underlined hover:cursor-pointer text-gray-900"
                  variant="ghost">
                  <Link href="/">Show All</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
