"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Footer = () => {
  const phoneNumber = "6289508308385";
  const message =
    "Halo admin, saya ingin konsultasi mengenai interior apakah bisa?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const scrollToPortofolio = () => {
    const section = document.getElementById("portofolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFaq = () => {
    const section = document.getElementById("faq");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <footer className="bg-[#124980]">
        <MaxWidthWrapper>
          <div className="grid grid-rows-4">
            <div className="grid grid-cols-2 lg:grid-cols-5 row-span-4 py-8 lg:gap-12 gap-6">
              <div className="flex flex-col col-span-3 lg:col-span-2 lg:gap-8 gap-4">
                <Link href="/">
                  <Image
                    src="/assets/logo/logo.png"
                    width={200}
                    height={66}
                    alt="Studior Logo"
                  />
                </Link>
                <div className="md:text-base text-xs text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur itaque iusto in, totam dignissimos quam velit eius
                </div>
                <Link
                  href="/"
                  className="lg:text-xl text-base text-white hover:underline">
                  info@studior.id
                </Link>
              </div>

              <div className="col-end-0 lg:col-end-5 flex flex-col gap-2 md:gap-4 text-white font-bold tracking-wider">
                <div className="lg:text-2xl text-xl pb-2">Home</div>
                <div
                  id="tentang"
                  className="font-bold text-white lg:text-lg text-base underline-offset-4 hover:underline hover:cursor-pointer">
                  Tentang Kami
                </div>
                <div
                  onClick={scrollToPortofolio}
                  id="portofolio"
                  className="font-bold text-white lg:text-lg text-base underline-offset-4 hover:underline hover:cursor-pointer">
                  Portofolio
                </div>
                <Link
                  href="/contact-us"
                  className="lg:text-lg text-base  hover:underline">
                  Kontak
                </Link>
                <div
                  onClick={scrollToFaq}
                  id="faq"
                  className="font-bold text-white lg:text-lg text-base underline-offset-4 hover:underline hover:cursor-pointer">
                  FAQ
                </div>
              </div>
              <div className="col-end-0 lg:col-end-6 flex flex-col gap-2 lg:gap-4 text-2xl text-white font-bold tracking-wider">
                <div className="lg:text-2xl text-xl pb-2">Kontak</div>
                <Link
                  href="https://maps.app.goo.gl/geLayzanmyrxPMSM8"
                  className="lg:text-lg text-base hover:underline"
                  target="_blank">
                  Jl. Semangu No.4a, Yogyakarta
                </Link>
                <div className="lg:flex hidden gap-4">
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link
                        href="https://www.tiktok.com/@studior_id"
                        target="_blank">
                        <FaTiktok />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link
                        href="https://www.instagram.com/studior_id/"
                        target="_blank">
                        <FaInstagram />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link href={whatsappLink} target="_blank">
                        <FaWhatsapp />
                      </Link>
                    </motion.div>
                  </IconContext.Provider>
                </div>
                <div className="flex lg:hidden gap-4">
                  <IconContext.Provider value={{ size: "1em" }}>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link
                        href="https://www.tiktok.com/@studior_id"
                        target="_blank">
                        <FaTiktok />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link
                        href="https://www.instagram.com/studior_id/"
                        target="_blank">
                        <FaInstagram />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }}>
                      <Link href={whatsappLink} target="_blank">
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
        </MaxWidthWrapper>
      </footer>
    </>
  );
};

export default Footer;
