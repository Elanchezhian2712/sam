// "use client";

// import MagicButton from "@/components/MagicButton";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { socialMedia } from "@/data";
// import Link from "next/link";
// import { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "next/image";
// import { BackgroundGradient } from "@/components/ui/background-gradient";
// // import Loading from "./loading";

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// export default function Home() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const response = await fetch("/api/sendMail", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setFormData({ name: "", email: "", message: "" });
//       toast.success("Email sent successfully!");
//     } else {
//       toast.error("Failed to send email.");
//     }
//   };

//   return (
//     <div className="h-screen w-full overflow-hidden dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative">
//       {/* <Loading /> */}
//       <header className="flex z-10 fixed p-4">
//         <div className="flex items-center space-x-4">
//           <Link href="/" className="cursor-pointer">
//             <MagicButton title="Back" icon={<FaArrowLeft />} position="left" />
//           </Link>

//           <div
//             className="cursor-pointer text-green-500"
//             onClick={() => toast("Email sent successfully!")}
//           ></div>
//         </div>
//       </header>
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full md:block hidden"
//           fill="purple"
//         />
//         <Spotlight
//           className="left-80 top-28 h-[80vh] w-[50vw] md:block hidden"
//           fill="blue"
//         />
//       </div>
//       <div className="main-content flex justify-center my-20 pt-20 pb-12 md:pb-10 md:pt-10 relative z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <BackgroundGradient>
//             <div className="shadow-lg rounded-lg p-8 border border-navy-600 w-full md:w-[400px] lg:w-[500px] h-full md:h-[490px] backdrop-filter backdrop-saturate-[180%] bg-slate-950 border-[rgb(255,255,255)]">
//               <h1 className="text-xl md:text-3xl font-bold text-center text-purple">
//                 Level Up Your Brand!
//               </h1>
//               <p className="mb-2 mt-2 text-center text-xs">
//                 Design intuitive interfaces enhancing user experience through
//                 aesthetics and functionality.
//               </p>
//               <hr />
//               <div className="mt-4 md:mt-2">
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4">
//                     <label htmlFor="name" className="block mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Enter your name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="bg-white text-black rounded px-3 py-2 w-full"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="block mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter your Email Address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="bg-white text-black rounded px-3 py-2 w-full"
//                       required
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="message" className="block mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={2}
//                       placeholder="Enter your Message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="bg-white text-black rounded px-3 py-2 w-full"
//                       required
//                     ></textarea>
//                   </div>
//                   <div className="flex justify-center mt-4">
//                     <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
//                       <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
//                       <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
//                       <span className="relative z-20 flex items-center text-sm">
//                         <svg
//                           className="relative w-5 h-5 mr-2 text-white"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M13 10V3L4 14h7v7l9-11h-7z"
//                           ></path>
//                         </svg>
//                         Send Message
//                       </span>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </BackgroundGradient>
//         </div>
//       </div>
//       <footer className="absolute bottom-0 left-0 right-0 z-10 text-center justify-between p-8">
//         <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//           <p className="md:text-base text-sm md:font-normal font-light">
//             Copyright © 2024 Sam Jayakumar
//           </p>

//           <div className="flex items-center md:gap-10 gap-6 mt-10 sm:mt-0">
//             {socialMedia.map((info) => (
//               <a
//                 key={info.id}
//                 href={info.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-80 bg-black-200 rounded-lg border border-black-300"
//               >
//                 <Image src={info.img} alt="icons" width={20} height={20} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//       <ToastContainer />
//     </div>
//   );
// }

"use client";

import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { socialMedia } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";

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
          <Link href="/" className="cursor-pointer">
            <MagicButton title="Back" icon={<FaArrowLeft />} position="left" />
          </Link>

          <div
            className="cursor-pointer text-green-500"
            onClick={() => toast("Email sent successfully!")}
          ></div>
        </div>
      </header>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div>
        <Spotlight
          className="-top-40 -left-10 lg:-left-32 lg:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full lg:block hidden"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw] lg:block hidden"
          fill="blue"
        />
      </div>
<<<<<<< HEAD
      <div className="main-content flex justify-center my-20 pt-20 pb-12 lg:pb-10 lg:pt-10 relative z-20">
=======
      <div className="main-content flex justify-center my-20 pt-20 pb-12 lg:pb-10 lg:pt-5 relative z-20">
>>>>>>> 7f5dcbacd5634959c86b642b2104579c85aa129c
        <div className="max-w-[89vw] lg:max-w-2xl xl:max-w-[60vw] flex flex-col items-center justify-center">
          <BackgroundGradient>
            <div className="shadow-lg rounded-lg p-8 border border-navy-600 w-full lg:w-[400px] xl:w-[400px] h-full lg:h-[490px] backdrop-filter backdrop-saturate-[180%] bg-slate-950 border-[rgb(243,241,241)] relative z-20">
              <h1 className="text-xl lg:text-3xl font-bold text-center text-purple">
                Level Up Your Brand!
              </h1>
              <p className="mb-2 mt-2 text-center text-xs">
                Design intuitive interfaces enhancing user experience through
                aesthetics and functionality.
              </p>
              <hr />
              <div className="mt-4 lg:mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white text-black rounded px-3 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white text-black rounded px-3 py-2 w-full"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      placeholder="Enter your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white text-black rounded px-3 py-2 w-full"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                      <span className="relative z-20 flex items-center text-sm">
                        <svg
                          className="relative w-5 h-5 mr-2 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 z-10 text-center justify-between p-8">
        <div className="flex mt-16 lg:flex-row flex-col justify-between items-center">
          <p className="lg:text-base text-sm lg:font-normal font-light">
            Copyright © 2024 Sam Jayakumar
          </p>

          <div className="flex items-center lg:gap-10 gap-6 mt-10 sm:mt-0">
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
