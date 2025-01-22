"use client";

import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex flex-wrap justify-center bg-[#FBEBB5]">
        <div className="flex items-center">
          <div>
            <h1 className="text-[#000000] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-tight">
              Rocket single <br />
              seater
            </h1>
            <p className="text-[#000000] text-[24px] border-b-[2px] w-[121px] border-[#000000] text-center">
              Shop Now
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/single-seater.png"
            alt="Rocket single seater"
            width={600}
            height={600}
            className="w-[600px] h-[600px]"
            priority
          />
        </div>
      </div>

      {/* Media Queries for responsiveness */}
      <style jsx global>{`
        /* For screens smaller than 768px (Mobile) */
        @media screen and (max-width: 768px) {
          .text-[64px] {
            font-size: 48px !important;
          }
          .text-[24px] {
            font-size: 18px !important;
          }
          .w-[853px] {
            width: 100% !important;
          }
          .h-[700px] {
            height: auto !important;
          }
          .w-[121px] {
            width: 90px !important;
          }
        }

        /* For tablets (600px to 768px) */
        @media screen and (min-width: 600px) and (max-width: 768px) {
          .text-[64px] {
            font-size: 56px !important;
          }
          .text-[24px] {
            font-size: 20px !important;
          }
        }

        /* For laptops (1024px and above) */
        @media screen and (min-width: 1024px) {
          .text-[64px] {
            font-size: 64px !important;
          }
          .text-[24px] {
            font-size: 24px !important;
          }
          .w-[853px] {
            width: 853px !important;
          }
          .h-[700px] {
            height: 700px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
