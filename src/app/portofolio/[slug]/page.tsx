// app/portfolio/[slug]/page.js

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Badges from "@/components/uttara/Badges";
import Collage from "@/components/uttara/Collage";
import Carousel from "@/components/Carousel";
import { PORTO_ITEM } from "@/app/config/portoData";

interface PortoProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PORTO_ITEM.map((item) => ({
    slug: item.slug,
  }));
}

const Page = ({ params }: PortoProps) => {
  const { slug } = params;
  const portoData = PORTO_ITEM.find((item) => item.slug === slug);

  if (!portoData) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <Carousel images={portoData.image} />
      <MaxWidthWrapper className="grid md:grid-cols-4">
        <div className="flex flex-col col-span-3 md:pt-12 pt-4 gap-3">
          <h1 className="font-bold md:text-5xl text-2xl tracking-wider text-[#484848]">
            {portoData.name}
          </h1>
          <div className="text-base text-muted-foreground">
            {portoData.categories}
          </div>
          <Badges badges={portoData.badges} />
          <Separator />
          <div className="text-3xl font-bold text-[#484848]">
            Lihat isi desain
          </div>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <Collage images={portoData.image} />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
