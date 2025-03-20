"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import H1 from "@/public/h1.png";
import H2 from "@/public/h2.png";
import H3 from "@/public/h3.png";

function Hero() {
  const [showCasePanel, setShowCasePanel] = useState(true);

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-18 xl:flex-row ">
      <div className="hero-map" />

      {/* Left Section */}
      <Image
        src="/camp.svg"
        alt="camp"
        width={50}
        height={50}
        className="absolute w-10 lg:w-[50px]"
      />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2  top-[50px] ">
        <h1 className="text-xl font-extrabold text-neonBlue lg:text-6xl lg:bold:88">
          AI Noir: <span className="text-cyberRed">Unravel the Unknown</span>
        </h1>

        <p className="mt-8 text-gray-30 text-lg xl:max-w-[560px]">
          Step into the shoes of a detective working alongside an advanced AI to
          solve high-tech crimes. But beware—**digital deception** lurks in
          every corner.
        </p>

        {/* Call to Action */}
        <div className="mt-10 flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Start Investigation Case"
            variant="bg-green-50 py-4 px-6"
            href="/case"
          />
          <Button
            type="button"
            title="Watch Trailer"
            icon="/play.svg"
            variant="btn_outline"
          />
        </div>
      </div>

      {/* Right Section (AI Console Effect) */}
      <div className="relative flex flex-1 items-start">
        {/* AI Hologram & Detective Silhouette */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] flex justify-center">
          <Image
            src={H1}
            alt="AI Hologram"
            width={400}
            height={400}
            className="object-contain opacity-80 animate-glow rounded-md"
          />
          <Image
            src={H2}
            alt="Detective Silhouette"
            width={350}
            height={350}
            className="absolute bottom-0 opacity-90 rounded-lg"
          />
        </div>

        {/* Case Intel Panel (Clickable) */}
        {showCasePanel && (
          <div className="absolute bottom-10 left-10 z-20 w-[260px] flex flex-col gap-6 rounded-xl bg-darkGlass px-6 py-6 backdrop-blur-md shadow-lg border border-neonBlue">
            <div className="flex justify-between">
              <p className="text-gray-300 text-sm">Latest Case</p>
              <Image
                src={"/close.svg"}
                alt="Close"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setShowCasePanel(false)} // Close on click
              />
            </div>
            <p className="text-lg text-white font-bold">
              Case #1024: Digital Mirage
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-400 text-sm">Suspects</p>
                <p className="text-white text-md">4</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 text-sm">Complexity</p>
                <p className="text-cyberRed text-md">High</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
