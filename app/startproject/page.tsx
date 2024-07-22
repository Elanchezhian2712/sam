"use client";

import MagicButton from "@/components/MagicButton";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { socialMedia } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image"; // Import the Image component

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Email sent successfully!");
    } else {
      toast.error("Failed to send email.");
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative">
      <header className="flex z-10 fixed p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <MagicButton
              title="Back"
              icon={<FaArrowLeft />}
              position="left"
            />
          </Link>
          <div
            className="cursor-pointer text-gree-500"
            onClick={() => toast("Email sent successfully!")}
          >
          </div>
        </div>
      </header>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
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
      <div className="main-content flex justify-center my-20 pt-20 relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="shadow-lg rounded-lg p-8 border border-navy-600 w-full md:w-[400px] lg:w-[500px] h-full md:h-[470px] backdrop-filter backdrop-blur-[16px] backdrop-saturate-[180%] bg-slate-950 border-[rgb(255,255,255)]">
            <h1 className="text-4xl font-bold text-center text-purple mb-4">
              Start a Project
            </h1>
            <div className="mt-8 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white text-black placeholder-navy-800 rounded border-navy-600 px-3 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white text-black placeholder-navy-800 rounded border-navy-600 px-3 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    placeholder="Enter your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white text-black placeholder-navy-800 rounded border-navy-600 px-3 py-2 w-full"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="bg-navy-600 hover:bg-purple transition-colors duration-300 text-white border border-navy-600 w-full z-20"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 z-10 text-center justify-between p-8">
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Sam Jayakumar
          </p>

          <div className="flex items-center md:gap-10 gap-6 mt-10 sm:mt-0">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-80 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}
