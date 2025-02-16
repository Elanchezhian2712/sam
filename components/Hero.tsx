import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pb-16 pt-36 sm:mt-4 md:mt-8 lg:mt-12 relative" id="about">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full md:block hidden"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw] md:block hidden"
          fill="blue"
        />
      </div>
      <div
        className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center md:h-screen"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="w-full absolute -top-10 -left-10 flex items-center justify-center md:h-screen md:-left-36"></div>
      <div className="flex justify-center relative my-7 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4 md:mb-0">
            Dynamic web and graphic magic with a focus on intuitive UX/UI
            design.
          </p>
          <TextGenerateEffect
            words="I'm SAM JAYAKUMAR"
            className="text-center text-[24px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-8 text-xs md:text-sm lg:text-lg">
            Versatile visual designer with 4+ years experience in UX/UI,
            branding, and video editing. Skilled in Photoshop, Illustrator, and
            Figma, dedicated to creating impactful user experiences.
          </p>
          <Link href="/startproject">
            <MagicButton
              title="Get Started on a Project"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
