import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import StepCard from "@/components/StepCard";
import StepCarousel from "@/components/StepCarousel";
import { CARD_ITEM } from "./config/cardData";
import { STEP_ITEM } from "./config/stepData";
import { PORTO_ITEM } from "./config/portoData";
import PortoCard from "@/components/PortoCard";
import { Button } from "@/components/ui/button";
import TestimoniSection from "@/components/TestimoniSection";
import ProcessSection from "@/components/ProcessSection";

// interface CardItem {
//   label: string;
//   description: string;
//   icon: string;
//   iconWidth: number;
//   iconHeight: number;
// }
// interface StepItem {
//   id: number;
//   label: string;
//   description: string;
//   icon: string;
//   iconWidth: number;
//   iconHeight: number;
// }
// interface PortoItem {
//   id: number;
//   name: string;
//   categories: string;
//   year: string;
//   description: string;
//   image: string;
//   alt: string;
// }

export default function Home() {
  return (
    <>
      <section className="">
        <Banner />
      </section>
      <section id="why">
        <MaxWidthWrapper>
          <div className="grid md:grid-cols-2 ">
            <div className="md:flex hidden">
              <Image
                src="/assets/images/portofolio/uttara/uttara-1.png"
                alt="Images"
                width={560}
                height={700}
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col md:justify-center w-full md:gap-8 gap-4 md:px-8 py-6">
              <h1 className="md:text-6xl text-4xl font-bold text-start">
                Why Choose <span className="text-[#124980]">Studior</span>
                <span className="text-[#FDD371]">?</span>
              </h1>
              <p className="md:text-base text-xs text-muted-foreground leading-relaxed">
                Selecting our interior design service ensures a seamless process
                from concept to completion, where our dedicated team
                collaborates closely with you to bring your vision to life,
                crafting a space that not only reflects your personality but
                also maximizes functionality and comfort.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CARD_ITEM.map((item, index) => (
                  <Cards
                    key={index}
                    label={item.label}
                    description={item.description}
                    icon={item.icon}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                  />
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="w-full">
        <Separator />
        <ProcessSection />
      </section>
      <section className="w-full flex bg-slate-100">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:py-12 py-4 lg:gap-0 gap-4">
            <div className="flex items-center justify-start">
              <h1 className="text-4xl font-bold tracking-wide">
                All Project <br /> that we have{" "}
                <span className="text-[#124980]">Done</span>
              </h1>
            </div>
            <div className="flex lg:col-end-5 col-span-2 items-center">
              <p className="md:text-lg text-xs font-semibold">
                {"''"}Berawal dari satu project yang kemudian berlanjut hingga
                saat ini berkat kepercayaan klien-klien kami & kerja keras tim
                kami yang selalu mengusahakan hasil yang terbaik dalam setiap
                project yang kami laksanakan. <br /> Berikut hasil kerja keras
                tim kami sejak tahun 2015-2022 yang tidak semuanya dapat kami
                tampilkan tapi kami harap dapat menjadi inspirasi untuk interior
                impian anda.
                {"''"}
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="w-full flex">
        <MaxWidthWrapper>
          <div className="flex flex-col md:gap-8 gap-4">
            {PORTO_ITEM.map((item, index) => (
              <PortoCard
                key={index}
                id={item.id}
                name={item.name}
                categories={item.categories}
                year={item.year}
                description={item.description}
                image={item.image}
                alt={item.alt}
                isReversedLayout={index === 1}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="w-full flex bg-slate-100">
        <MaxWidthWrapper>
          <TestimoniSection />
        </MaxWidthWrapper>
      </section>
    </>
  );
}
