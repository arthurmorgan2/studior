"use client";

import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { CollageProps } from "@/app/config/interfaces";
// import { CustomImage, images } from "@/app/config/Collage/image";

const Collage: React.FC<CollageProps> = ({ images }) => {
  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className="flex flex-col gap-2 pt-4 pb-8">
      <Tabs defaultValue="hasil">
        <TabsList className="grid grid-cols-3 w-full h-[50px] text-[#484848]">
          <TabsTrigger value="hasil" className="md:text-base text-xs">
            Hasil
          </TabsTrigger>
          <TabsTrigger value="desain" className="md:text-base text-xs">
            Desain
          </TabsTrigger>
          <TabsTrigger value="beforeandafter" className="md:text-base text-xs">
            B & A
          </TabsTrigger>
        </TabsList>
        <TabsContent value="hasil">
          <div className="border">
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
            />
            <Lightbox
              plugins={[Zoom]}
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
        </TabsContent>
        <TabsContent value="desain">
          <div className="grid grid-cols-3 gap-2 border min-h-[550px]">
            Gambar Desain Image Here
          </div>
        </TabsContent>
        <TabsContent value="beforeandafter">
          <div className="grid grid-cols-3 gap-2 border min-h-[550px]">
            Gambar Before and After Image Here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Collage;
