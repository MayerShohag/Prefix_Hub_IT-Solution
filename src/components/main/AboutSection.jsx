import { BsHddNetwork } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { GiShieldBounces } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { PiBrainLight } from "react-icons/pi";
import { TbWorldDollar } from "react-icons/tb";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Link } from "react-router";

const whatWeDo = [
     {
          id: 1,
          topic: "IT Support & Services",
          decription:
               "Complete IT infrastructure setup, maintenance, and system optimization.",
          icon: <MdOutlineSupportAgent className="text-4xl" />,
     },
     {
          id: 2,
          topic: "ISP & Networking",
          decription:
               "Advanced network configuration, routing, switching, and bandwidth management.",
          icon: <BsHddNetwork className="text-4xl p-1" />,
     },
     {
          id: 3,
          topic: "Server & Hosting Management",
          decription:
               "Reliable web hosting, cloud servers, and data protection.",
          icon: <CiServer className="text-4xl p-0.5" />,
     },
     {
          id: 4,
          topic: "Web & Software Development",
          decription:
               "Custom websites, mobile apps, ERP/CRM solutions, and SaaS products.",
          icon: <LiaLaptopCodeSolid className="text-4xl" />,
     },
     {
          id: 5,
          topic: "Digital Marketing & E-commerce",
          decription:
               "SEO, social media marketing, content strategy, and online store management.",
          icon: <TbWorldDollar className="text-4xl" />,
     },
     {
          id: 6,
          topic: "Cybersecurity",
          decription:
               "Protecting your data, networks, and systems with advanced security solutions.",
          icon: <VscWorkspaceTrusted className="text-4xl p-1" />,
     },
     {
          id: 7,
          topic: "Training & Freelancing Support",
          decription:
               "Hands-on training in IT, networking, web development, digital marketing, and freelancing skills.",
          icon: <GrWorkshop className="text-4xl p-1" />,
     },
];

export default function AboutSection() {
     return (
          <section className="bg-[#005461] text-gray-50 py-16 px-6 sm:px-12 lg:px-20">
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="text-center lg:col-span-12">
                         <h2 className="text-3xl lg:text-6xl font-semibold text-gray-200 mb-3">
                              About Us
                         </h2>
                         <p className="text-gray-200 font-light  text-lg max-w-2xl mx-auto">
                              At PrefixHub IT Solution, we believe in
                              transforming ideas into technology, connecting
                              businesses with innovation, and empowering clients
                              to succeed in a digital world.
                         </p>
                    </div>

                    <div className="space-y-6 lg:col-span-6">
                         <div>
                              <img
                                   src="Picture/pexels-divinetechygirl-1181354.jpg"
                                   className="w-full h-auto rounded-2xl brightness-75"
                                   alt="about section"
                              />
                         </div>
                         <div className="flex items-center gap-4">
                              <img
                                   src="Logo/logo.png"
                                   className="w-20"
                                   alt="company logo"
                              />

                              <div>
                                   <h2
                                        id="about-heading"
                                        className="text-2xl font-semibold leading-tight"
                                   >
                                        Prefix Hub IT Solution
                                   </h2>
                                   <p className="text-sm font-light text-gray-200">
                                        We build reliable connection and secure
                                        infrastructure
                                   </p>
                              </div>
                         </div>

                         <div className=" text-gray-200">
                              <p className="font-light text-[16px]">
                                   PrefixHub IT Solution is a forward-thinking
                                   technology company dedicated to delivering
                                   comprehensive IT solutions, software
                                   development, networking, digital marketing,
                                   cybersecurity, and training services. Founded
                                   with the vision of empowering businesses and
                                   individuals worldwide, we provide innovative,
                                   secure, and reliable technology solutions
                                   tailored to meet the diverse needs of modern
                                   industries.
                              </p>

                              <p className="text-sm font-extralight italic text-gray-300 mt-5">
                                   — Established - 1st Jan 2026
                              </p>
                         </div>

                         <div className="flex flex-wrap gap-3">
                              <Link
                                   to={"/contact"}
                                   className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-accent/50 text-white font-medium shadow hover:bg-[#018790] duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                   Get in Touch
                              </Link>

                              <Link
                                   to="/about"
                                   className="inline-flex items-center gap-2 rounded-lg px-5 py-3 border border-gray-500  text-gray-200  hover:bg-[#018790]/70 hover:border-transparent focus:outline-none"
                              >
                                   Careers
                              </Link>
                         </div>
                    </div>

                    <div className="grid gap-6 lg:col-span-6">
                         <div className="rounded-2xl md:p-6 md:bg-[#018790]/20 md:border md:border-[#018790] md:shadow-2xl">
                              <h4 className="text-lg font-medium text-white flex items-center gap-3">
                                   <TfiLayoutLineSolid className="text-4xl" />
                                   How we work
                              </h4>
                              <p className="text-4xl font-semibold">
                                   We specialize in—
                              </p>
                              <ul className="mt-4 space-y-5 text-sm text-gray-700">
                                   {whatWeDo.map((weDo) => (
                                        <li
                                             key={weDo.id}
                                             className="md:flex items-center gap-3 bg-[#018790]/50 p-5 rounded-2xl border border-[#018790]"
                                        >
                                             <div className="inline-flex items-center justify-center w-12 h-12 p-2 shadow-md rounded-full bg-accent/50 text-white text-xs font-medium">
                                                  {weDo.icon}
                                             </div>
                                             <span className="">
                                                  <h1 className="text-gray-200 mt-2 text-lg font-medium">
                                                       {weDo.topic}
                                                  </h1>
                                                  <span className="text-sm text-gray-300 font-light">
                                                       {weDo.decription}
                                                  </span>
                                             </span>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
