import { LuLaptopMinimalCheck } from "react-icons/lu";
import { PiBrainLight } from "react-icons/pi";
import { TfiLayoutLineSolid, TfiLineDotted } from "react-icons/tfi";
import { Link } from "react-router";

const ServiceIcon = () => {
     return (
          <svg
               className="w-6 h-6 shrink-0"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               aria-hidden="true"
          >
               <path
                    d="M12 2v6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
               />
               <path
                    d="M5 11l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
               />
          </svg>
     );
};

export default function AboutSection() {
     return (
          <section className="bg-gray-800 text-gray-50 py-16 px-6 sm:px-12 lg:px-20">
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="text-center lg:col-span-12">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-200 mb-3">
                              About Us
                         </h2>
                         <p className="text-gray-400 max-w-2xl mx-auto">
                              We're dedicated to delivering world-class
                              technology solutions that help businesses grow,
                              innovate, and stay secure.
                         </p>
                    </div>

                    <div className="space-y-6 lg:col-span-6 ">
                         <div>
                              <img
                                   src="/public/carousel-3.jpg"
                                   className="w-full h-auto rounded-2xl brightness-75"
                                   alt=""
                              />
                         </div>
                         <div className="flex items-center gap-4">
                              <h1 className="border">
                                   Prefix Hub IT Solution logo
                              </h1>

                              <div>
                                   <h2
                                        id="about-heading"
                                        className="text-2xl font-bold leading-tight"
                                   >
                                        Prefix Hub IT Solution
                                   </h2>
                                   <p className="text-sm text-gray-400">
                                        We build reliable connection and secure
                                        infrastructure
                                   </p>
                              </div>
                         </div>

                         <div className=" text-gray-200">
                              <p>
                                   We design and deliver secure, scalable
                                   technology that helps teams move faster and
                                   focus on what matters.
                              </p>

                              <p className="text-sm text-gray-400 ">
                                   Established 2026
                              </p>
                         </div>

                         <div className="flex flex-wrap gap-3">
                              <Link
                                   to={"/contact"}
                                   className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-accent/50 text-white font-medium shadow hover:bg-[#DA3343] duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                   Get in Touch
                              </Link>

                              <Link
                                   to="/about"
                                   className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-gray-500  text-gray-200  hover:bg-gray-700  focus:outline-none"
                              >
                                   Careers
                              </Link>
                         </div>
                    </div>

                    <div className="grid gap-6 lg:col-span-6">
                         <div className="rounded-2xl p-6 bg-gray-700/20 border border-gray-700 shadow-md">
                              <h4 className="text-lg font-semibold text-accent flex items-center gap-3">
                                   <TfiLayoutLineSolid className="text-4xl" />
                                   How we work
                              </h4>
                              <p className="text-4xl font-bold">
                                   Deliver Only Exceptional Quality,
                                   <br /> And Improve!
                              </p>
                              <ul className="mt-4 space-y-5 text-sm text-gray-700">
                                   <li className="flex items-start gap-3 bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-2 shadow-md rounded-full bg-accent/50 text-white text-xs font-medium">
                                             <PiBrainLight className="text-4xl" />
                                        </div>
                                        <span className="text-lg">
                                             <strong className="text-gray-200">
                                                  Brainstorming
                                             </strong>
                                             <br />
                                             <span className="text-sm text-gray-300">
                                                  — The first step is to take
                                                  the projects data & think
                                                  about to manage all aspects of
                                                  your software assets including
                                                  maintenance. Our skilled
                                                  personnel along with a
                                                  high-level look at the
                                                  client’s network and
                                                  suggestions for strategic
                                                  direction utilising the latest
                                                  processing software.
                                             </span>
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3 bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-2 shadow-md rounded-full bg-accent/50 text-white text-xs font-medium">
                                             <LuLaptopMinimalCheck className="text-4xl" />
                                        </div>
                                        <span className="text-lg">
                                             <strong className="text-gray-200">
                                                  Concept Prototype
                                             </strong>
                                             <br />
                                             <span className="text-sm text-gray-300">
                                                  — To know about the product,
                                                  customers & competitors offer
                                                  integral communication
                                                  services software assets.
                                             </span>
                                        </span>
                                   </li>
                                   <li className="flex items-start gap-3 bg-gray-800 p-5 rounded-2xl border border-gray-700">
                                        <div className="inline-flex items-center justify-center w-12 h-12 p-2 shadow-md rounded-full bg-accent/50 text-white text-xs font-medium">
                                             <PiBrainLight className="text-4xl" />
                                        </div>
                                        <span className="text-lg">
                                             <strong className="text-gray-200">
                                                  Design Layout
                                             </strong>
                                             <br />
                                             <span className="text-sm text-gray-300">
                                                  — Start to work on the design
                                                  taking with collected data,
                                                  we're responsible for our
                                                  process and results.
                                             </span>
                                        </span>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
