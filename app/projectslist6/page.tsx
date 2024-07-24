"use client";

import MagicButton from "@/components/MagicButton";
import { socialMedia, content, projects } from "@/data/index"; // Ensure the path is correct
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/MovingBorders";

interface Project {
  link: string;
  img: string;
  alt: string;
  title: string;
  des: string;
}

function shuffleArray(array: Project[]): Project[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledProjects: Project[] = shuffleArray([...projects]).slice(0, 3);

const ProjectList: React.FC = () => {
  const mainContent = content[5];

  return (
    <div className="min-h-screen w-full overflow-hidden dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex flex-col relative">
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
      <header className="flex justify-between p-8 z-10 relative w-full md:w-auto">
        <div className="flex justify-between w-full space-x-4">
          <div className="flex justify-start">
            <Link href="/">
              <MagicButton
                title="Back"
                icon={<FaArrowLeft />}
                position="left"
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <Link href="/startproject">
              <MagicButton
                title="Start a Project"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="absolute inset-0 pointer-events-none dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <main className="container mx-auto p-8 flex-grow relative z-10">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple">
            {mainContent.title.text}
          </h1>
          <p className="text-white text-justify mb-8">
            {mainContent.description.text}
          </p>
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="font-bold mb-2 text-purple">Role :</h2>
              <p>{mainContent.role.text}</p>
            </div>
            <div>
              <h2 className="font-bold mb-2 text-purple">Deliverables :</h2>
              <p>{mainContent.deliverables.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8">
            {mainContent.images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-[20px] h-[300px] md:h-[600px] relative"
              >
                <Link href={image.src} target="_blank">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px]"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {mainContent.images.slice(2).map((image, index) => (
              <div
                key={index + 2}
                className="bg-gray-800 rounded-[20px] h-[300px] md:h-[600px] relative"
              >
                <Link href={image.src} target="_blank">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-[20px]"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-40">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
            Discover <span className="text-purple">My Other Projects!</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {shuffledProjects.map((project: Project, index: number) => (
              <div key={index} className="p-4 rounded">
                <Button
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem * 0.96)`,
                  }}
                  className="flex flex-col text-black dark:text-white border-neutral-200 dark:border-slate-700 w-full"
                >
                  <div className="relative w-full h-48 sm:h-64 mt-6 mx-4">
                    <Link href={project.link}>
                      <Image
                        src={project.img}
                        alt={project.alt}
                        objectFit="cover"
                        className="rounded-[20px] transition-transform duration-300 ease-in-out transform hover:animate-pulseOnce"
                        width={600}
                        height={400}
                      />
                    </Link>
                  </div>
                  <h3 className="font-bold mt-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.des}</p>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center p-8 z-10 mt-20 relative">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">Your</span> digital
            presence to the next level..?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <Link href="/startproject">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-16">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Sam Jayakumar
          </p>

          <div className="flex items-center md:gap-10 gap-6 mt-10 md:mt-0">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-80 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={info.img}
                  alt="social media icon"
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectList;
