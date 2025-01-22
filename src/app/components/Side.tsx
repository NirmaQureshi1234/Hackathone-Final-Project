"use client"

import React from "react";
import Image from "next/image";

function Side() {
  return (
    <div className="container flex flex-wrap justify-center gap-8 py-12 bg-[#FAF4F4]">
      {/* Item 1 */}
      <div className="flex flex-col items-center w-full md:w-1/2 lg:w-[605px]">
        <Image
          src="/side-table.png"
          alt="Side Table"
          className="w-full h-auto max-w-[320px] p-1"
          width={605}
          height={562}
        />
        <p className="text-[24px] md:text-[28px] lg:text-[36px] text-black">
          Side Table
        </p>
        <p className="underline text-[18px] md:text-[20px] lg:text-[24px] text-black border-b-2 mt-2 cursor-pointer">
          View More
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center w-full md:w-1/2 lg:w-[605px]">
        <Image
          src="/sofa.png"
          alt="Sofa Seater"
          className="w-full h-auto max-w-[350px] mr-[70px] p-8"
          width={605}
          height={562}
          
        />
        {/* paragraph added */}
        <p className="text-[24px] md:text-[28px] lg:text-[36px] text-black">
          Sofa Seater
        </p>
        <p className="underline text-[18px] md:text-[20px] lg:text-[24px] text-black border-b-2 mt-2 cursor-pointer">
          View More
        </p>
      </div>
    </div>
  );
}

export default Side;

 
 
  

