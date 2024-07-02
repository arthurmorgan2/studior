"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import Link from "next/link";
import Background from "./Background";

const Banner = () => {
  const scrollToSection = () => {
    const section = document.getElementById("why");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Background>
        <div className="absolute inset-0 flex md:pt-28 pt-24">
          <MaxWidthWrapper>
            <div className="grid md:grid-cols-2 md:grid-rows-6 text-white">
              <div className="flex flex-col justify-center md:items-start items-center row-span-5 md:text-start text-center">
                <h1 className="lg:text-6xl text-4xl font-bold mb-4 drop-shadow-xl">
                  Desain Ruang Nyaman Versi Kamu!
                </h1>
                <p className="lg:text-lg text-sm">
                  Studior Team siap menjadi partner terbaik untuk <br />{" "}
                  wujudkan desain ruang impianmu
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={scrollToSection}
                    variant="ghost"
                    className="font-bold tracking-widest bg-[#124980] mt-8 px-6 py-3">
                    Kenapa Studior?
                  </Button>
                  <Button
                    variant="outline"
                    className="font-bold tracking-widest mt-8 px-6 py-3 bg-transparent">
                    Tentang Kami
                  </Button>
                </div>
              </div>
              {/* <div className="flex justify-center items-center row-span-5 md:pt-0 pt-12">
                Carousel Content
            </div> */}
              {/* <div className="flex justify-center items-center w-full md:col-span-2">
              tes
            </div> */}
            </div>
          </MaxWidthWrapper>
        </div>
      </Background>
    </>
  );
};

export default Banner;
