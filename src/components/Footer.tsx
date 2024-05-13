"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#124980]">
        <div className="grid grid-rows-4">
          <div className="grid grid-cols-2 lg:grid-cols-5 row-span-4 lg:p-24 px-4 py-8 lg:gap-12 gap-6">
            <div className="flex flex-col col-span-3 lg:col-span-2 lg:gap-12 gap-6">
              <Link href="/">
                <Image
                  src="/assets/logo/logo.png"
                  width={240}
                  height={66}
                  alt="Studior Logo"
                />
              </Link>
              <div className="lg:text-xl text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur itaque iusto in, totam dignissimos quam velit eius
              </div>
              <Link href="/" className="lg:text-xl text-base text-white hover:underline">
                studior@mail.com
              </Link>
            </div>

            <div className="col-end-0 lg:col-end-5 flex flex-col gap-4 lg:gap-8 text-white font-bold tracking-wider">
              <Link href="/" className="lg:text-2xl text-xl pb-2">
                Home
              </Link>
              <Link href="/" className="lg:text-lg text-base hover:underline">
                About Us
              </Link>
              <Link href="/" className="lg:text-lg text-base  hover:underline">
                Portfolio
              </Link>
              <Link href="/" className="lg:text-lg text-base  hover:underline">
                Contact Us
              </Link>
            </div>
            <div className="col-end-0 lg:col-end-6 flex flex-col gap-4 lg:gap-8 text-2xl text-white font-bold tracking-wider">
              <Link href="/" className="lg:text-2xl text-xl pb-2">
                Contact
              </Link>
              <Link href="/" className="lg:text-lg text-base hover:underline">
                Jl. Semangu No.4a, Yogyakarta
              </Link>
              <div className="lg:flex hidden gap-4">
                <IconContext.Provider value={{ size: "1.5em" }}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaTiktok />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaInstagram />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaWhatsapp />
                    </Link>
                  </motion.div>
                </IconContext.Provider>
              </div>
              <div className="flex lg:hidden gap-4">
                <IconContext.Provider value={{ size: "1em" }}>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaTiktok />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaInstagram />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }}>
                    <Link href="/">
                      <FaWhatsapp />
                    </Link>
                  </motion.div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full py-4">
            <div className="text-white font-bold tracking-wider">
              All right reserved by Studior.id
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
