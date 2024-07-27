// components/RecentProjects.js
"use client";

import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Button } from "./ui/MovingBorders";

const RecentProjects = () => {
  return (
    <div className="py-24 sm:mt-4 md:mt-8 lg:mt-12" id="projects">
      <h1 className="heading">
        My <span className="text-purple">Work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-6 gap-16 mt-10">
        {projects.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundImage:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-700"
          >
            <div className="lg:min-h-[32rem] sm:min-h-[26rem] h-[22rem] flex items-center justify-center px-4 sm:w-[29rem] w-[85vw]">
              <PinContainer title="Explore">
                <div className="relative flex items-center justify-center sm:w-[28rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[36vh] mb-10">
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 object-cover w-[90%] h-[100%] rounded-lg"
                  />
                </div>

                <h2 className="font-bold text-sm md:text-lg lg:text-3xl line-clamp-2">
                  {item.title}
                </h2>

                <p
                  className="lg:text-xl lg:font-normal font-light md:text-sm text-xs line-clamp-3"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-around mt-7 mb-5">
                  <div className="flex justify-center flex-1">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple items-center">
                      <Link href={item.link} rel="noopener noreferrer">
                        Check Project Portfolio
                      </Link>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </p>
                  </div>
                </div>
              </PinContainer>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
