import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { CARD_ITEM } from "./config/cardData";
import { PORTO_ITEM } from "./config/portoData";
import PortoCard from "@/components/PortoCard";
import TestimoniSection from "@/components/TestimoniSection";
import ProcessSection from "@/components/ProcessSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type PortoItem = (typeof PORTO_ITEM)[number];

export default function Home() {
  return (
    <>
      <section className="banner">
        <Banner />
      </section>
      <section id="why" className="w-full">
        <MaxWidthWrapper>
          <div className="flex flex-col pt-8 md:gap-8 gap-4">
            <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-700">
              Mengapa Memilih <span className="text-[#124980]">Studiör</span>
              <span className="text-[#FDD371]">?</span>
            </h1>
            <div className="grid grid-cols-3 lg:gap-12 gap-2">
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
        </MaxWidthWrapper>
      </section>
      {/* <section className="process w-full">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-8">
            <h1 className="md:text-6xl text-4xl font-bold text-center text-gray-700">
              Our Process
            </h1>
            <div className="flex items-center"></div>
          </div>
        </MaxWidthWrapper>
      </section> */}
      {/* <section id="why">
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
              <h1 className="md:text-6xl text-4xl font-bold text-start text-gray-700">
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
      </section> */}
      <section className="process w-full">
        <ProcessSection />
      </section>
      <section id="portofolio" className="w-full flex bg-slate-100">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 lg:py-12 py-4 lg:gap-0 gap-4">
            <div className="flex col-span-2  items-center justify-start">
              <h1 className="md:text-4xl text-2xl font-bold tracking-wide text-gray-700 leading-tight">
                Portofolio Proyek <br />{" "}
                <span className="text-[#124980]">Studiör</span>
              </h1>
            </div>
            <div className="flex lg:col-end-6 col-span-2 items-center">
              <p className="md:text-lg text-xs font-semibold text-gray-700">
                {"''"}Berikut hasil proyek yang telah kami selesaikan sebelumnya
                yang mungkin bisa menjadi inspirasi
                {"''"}
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="w-full flex">
        <MaxWidthWrapper>
          <div className="flex flex-col md:gap-8 gap-4">
            {PORTO_ITEM.map((porto: PortoItem, index) => (
              <PortoCard
                key={porto.id}
                name={porto.name}
                address={porto.address}
                categories={porto.categories}
                year={porto.year}
                description={porto.description}
                images={porto.image}
                alt={porto.alt}
                id={0}
                isReversedLayout={index === 1}
                url={porto.url}
                slug={porto.slug}
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
      <section id="faq" className="w-full flex">
        <MaxWidthWrapper>
          <div className="grid lg:grid-cols-5">
            <div className="col-span-2 flex flex-col lg:gap-4 gap-1.5 lg:py-12 pt-4">
              <h1 className="md:text-4xl text-2xl font-bold tracking-wide text-gray-700">
                Frequently Asked Questions
              </h1>
              <p className="md:text-base text-xs text-muted-foreground leading-relaxed">
                Temukan jawaban atas pertanyaan umum tentang layanan desain
                interior kami dan cara kami bekerja
              </p>
              <Link href="/contact-us">
                <Button
                  variant="ghost"
                  className="font-bold tracking-widest bg-[#124980] text-white">
                  Kontak Kami
                </Button>
              </Link>
            </div>
            <div className="col-span-3 lg:py-8 lg:pt-8 pt-0">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-lg text-base text-start font-bold tracking-wider text-gray-700">
                    What services do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-base text-xs text-muted-foreground leading-relaxed">
                    We offer a range of services including residential and
                    commercial interior design, renovation and remodeling, space
                    planning, furniture selection, and custom design solutions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="lg:text-lg text-base text-start font-bold tracking-wider text-gray-700">
                    How long does a project usually take?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-base text-xs text-muted-foreground leading-relaxed">
                    The duration of a project depends on its scope and
                    complexity. A typical residential project can take anywhere
                    from a few weeks to several months. We provide a detailed
                    timeline during the design concept phase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="lg:text-lg text-base text-start font-bold tracking-wider text-gray-700">
                    Can you help with small projects or single rooms?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-base text-xs text-muted-foreground leading-relaxed">
                    Yes, we handle projects of all sizes, from single-room
                    makeovers to full-home renovations. No project is too small
                    for us to bring our expertise and creativity.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
