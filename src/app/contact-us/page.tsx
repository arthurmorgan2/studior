import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const phoneNumber = "6289508308385";
  const message =
    "Halo admin, saya ingin konsultasi mengenai interior apakah bisa?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <section className="min-h-screen">
        <div className="w-full grid-rows-2">
          <div className="relative min-h-[712px]">
            <Image
              src="/assets/images/portofolio/thumbnails/uttara-4-min.png"
              alt="background"
              layout="fill"
              objectFit="cover"
              className="blur-md"
            />
            <div className="relative inset-0 py-24">
              <MaxWidthWrapper>
                <div className="grid md:grid-cols-2 gap-4">
                  <ContactForm />
                  <div className="flex h-full w-100">
                    <Card className="w-full bg-[#124980] bg-opacity-50 border-none">
                      <CardHeader>
                        <CardTitle className="text-4xl md:text-6xl text-white">
                          Where to Find Us
                        </CardTitle>
                        <CardDescription className="md:text-lg text-sm text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sapiente aspernatur velit voluptate accusantium
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-8 pt-4">
                        <div className="flex items-center text-white gap-4">
                          <FaLocationDot className="h-8 w-8" />
                          <Link
                            href="https://maps.app.goo.gl/geLayzanmyrxPMSM8"
                            className="md:text-lg text-sm hover:underline"
                            target="_blank">
                            Jl. Semangu No.4a, Yogyakarta
                          </Link>
                        </div>
                        <div className="flex items-center text-white gap-4">
                          <FaInstagram className="h-8 w-8" />
                          <Link
                            href="https://www.instagram.com/studior_id/"
                            className="md:text-lg text-sm hover:underline"
                            target="_blank">
                            @studior_id
                          </Link>
                        </div>
                        <div className="flex items-center text-white gap-4">
                          <FaTiktok className="h-8 w-8" />
                          <Link
                            href="https://www.tiktok.com/@studior_id"
                            className="md:text-lg text-sm hover:underline"
                            target="_blank">
                            studior_id
                          </Link>
                        </div>
                        <div className="flex items-center text-white gap-4">
                          <FaWhatsapp className="h-8 w-8" />
                          <Link
                            href={whatsappLink}
                            className="md:text-lg text-sm hover:underline"
                            target="_blank">
                            Studior Design
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </MaxWidthWrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
