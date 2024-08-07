"use client";

import React, { useCallback } from "react";
import { Button } from "./ui/button";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import framer, { motion } from "framer-motion";

const TestimoniSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="grid lg:grid-cols-2 lg:py-12 py-4 lg:gap-0 gap-4">
      <div className="flex flex-col lg:gap-16 gap-4">
        <h1 className="md:text-4xl text-xl font-bold tracking-wide text-gray-700">
          What Our <br /> <span className="text-[#124980]">Customers </span>Says
        </h1>
        <div className="md:flex hidden gap-6 w-full">
          <motion.button
            whileHover={{ x: -5 }}
            className="embla__prev p-0 hover:text-[#124980]"
            onClick={scrollPrev}>
            <IconContext.Provider value={{ size: "3em" }}>
              <HiArrowLongLeft />
            </IconContext.Provider>
          </motion.button>
          <motion.button
            whileHover={{ x: 5 }}
            className="embla__next p-0 hover:text-[#124980]"
            onClick={scrollNext}>
            <IconContext.Provider value={{ size: "3em" }}>
              <HiArrowLongRight />
            </IconContext.Provider>
          </motion.button>
        </div>
      </div>

      <div className="embla__viewport mx-auto max-w-lg" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex flex-col justify-between gap-4 text-gray-700">
            <p className="md:text-lg text-xs font-semibold">
              {"''"}Puas dengan hasilnya, rapi dan detail. Semua request kami
              bisa diaplikasikan dengan baik. Opsi2 bahan juga lengkap dan bisa
              dicarikan sesuai request. Thanks Studior.{"''"}
            </p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/assets/avatar/avatar-2.png" />
                <AvatarFallback>Dayan Ramly Ramadhan</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <h1 className="lg:text-base text-xs font-semibold">
                  Dayan Ramly Ramadhan
                </h1>
                <p className="text-muted-foreground lg:text-base text-xs">
                  Yogyakarta
                </p>
              </div>
            </div>
          </div>
          <div className="embla__slide flex flex-col justify-between gap-4 text-gray-700">
            <p className="md:text-lg text-xs font-semibold">
              {"''"}Hasilnya mantep bagus bgt, pengerjaan juga tepat waktu, next
              kalo ada rumah/toko lagi mau bikin interior nya disini lagi aja.
              {"''"}
            </p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/assets/avatar/avatar-3.png" />
                <AvatarFallback>Safirra Wigati</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <h1 className="lg:text-base text-xs font-semibold">
                  Safirra Wigati
                </h1>
                <p className="text-muted-foreground lg:text-base text-xs">
                  Yogyakarta
                </p>
              </div>
            </div>
          </div>
          <div className="embla__slide flex flex-col justify-between gap-4 text-gray-700">
            <p className="md:text-lg text-xs font-semibold">
              {"''"}Menggunakan jasa studior utk membuat kitchen set adalah
              pilihan tepat bagi sy. Teamnya sangat komunikatif dan helpfull
              sekali. Pengerjaannya juga rapi. Pelayanannya juga baik. Sukses
              selalu utk studior dan team..
              {"''"}
            </p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/assets/avatar/avatar-4.png" />
                <AvatarFallback>Ratna Setyaningsih</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center">
                <h1 className="lg:text-base text-xs font-semibold">
                  Ratna Setyaningsih
                </h1>
                <p className="text-muted-foreground lg:text-base text-xs">
                  Yogyakarta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden gap-6 w-full">
        <motion.button
          whileHover={{ x: -5 }}
          className="embla__prev p-0 hover:text-[#124980]"
          onClick={scrollPrev}>
          <IconContext.Provider value={{ size: "2em" }}>
            <HiArrowLongLeft />
          </IconContext.Provider>
        </motion.button>
        <motion.button
          whileHover={{ x: 5 }}
          className="embla__next p-0 hover:text-[#124980]"
          onClick={scrollNext}>
          <IconContext.Provider value={{ size: "2em" }}>
            <HiArrowLongRight />
          </IconContext.Provider>
        </motion.button>
      </div>
    </div>
  );
};

export default TestimoniSection;
