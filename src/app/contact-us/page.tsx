import Background from "@/components/Background";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="absolute flex inset-0 md:pt-28 pt-24">
        <MaxWidthWrapper>
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="lg:text-6xl text-4xl font-bold drop-shadow-xl text-gray-700">
              Reach Our Team
            </h1>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Page;
