import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#124980] text-white z-50 sticky top-0 inset-x-0 h-16">
      <header className="bg-[#124980]relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center mx-4">
              <div className="flex">
                <Link href="/">
                  <Image
                    src="/assets/logo/logo.png"
                    width={90}
                    height={40}
                    alt="Studior Logo"
                  />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:flex lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 text-base sm:text-sm font-medium">
                  <Button className="gap-1.5 group" variant="ghost">
                    <Link href="/">About</Link>
                  </Button>
                  <Button className="gap-1.5 group" variant="ghost">
                    <Link href="/">Contact</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
