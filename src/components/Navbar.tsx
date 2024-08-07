"use client";

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu open/close
  const controls = useAnimation();
  const [hasBackground, setHasBackground] = useState(false); // State to track background color

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    // Set background color based on scroll position
    if (currentScrollPos > 100) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    controls.start(visible ? { y: 0 } : { y: -100 });
  }, [visible, controls]);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`text-white z-50 fixed top-0 inset-x-0 h-16 ${
        hasBackground || isMenuOpen ? "bg-[#124980]" : "" // Apply background color conditionally
      }`}
      style={{
        backgroundColor: hasBackground
          ? "rgba(18, 73, 128, 1)"
          : "rgba(75, 85, 99, 0.5)", // Set rgba with opacity
        transition: "background-color 0.5s ease",
      }}>
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-56">
              <Link href="/">
                <Image
                  src="/assets/logo/logo.png"
                  width={90}
                  height={40}
                  alt="Studior Logo"
                />
              </Link>
            </div>

            <div className="flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4 text-base sm:text-sm">
                <div className="hidden lg:flex z-50">
                  <NavItems />
                </div>
                <Button variant="ghost">
                  <Link href="/about-us" className="font-bold tracking-widest">
                    Tentang Kami
                  </Link>
                </Button>
                <Button variant="ghost">
                  <Link
                    href="/contact-us"
                    className="font-bold tracking-widest">
                    Kontak
                  </Link>
                </Button>
              </div>
              {/* Burger Menu Icon */}
              <Button
                variant="ghost"
                className="lg:hidden ml-4 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 inset-x-0 bg-gray-500 bg-opacity-70 py-4 flex justify-center h-dvh overflow-y-hidden">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-stretch md:mx-0 mx-4 gap-12 text-white">
            <div className="md:px-4 px-0 py-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-3xl lg:text-sm px-6 py-10 rounded-xl bg-[#124980]"
                  onClick={handleLinkClick}>
                  Portofolio
                </Button>
              </Link>
            </div>
            <div className="md:px-4 px-0 py-2">
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-3xl lg:text-sm px-6 py-10 rounded-xl bg-[#124980]"
                  onClick={handleLinkClick}>
                  Tentang Kami
                </Button>
              </Link>
            </div>
            <div className="md:px-4 px-0 py-2">
              <Link href="/contact-us">
                <Button
                  variant="ghost"
                  className="text-3xl lg:text-sm px-6 py-10 rounded-xl bg-[#124980]"
                  onClick={handleLinkClick}>
                  Kontak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
