import { useState } from "react";
import {
     CiFacebook,
     CiInstagram,
     CiLinkedin,
     CiLocationOn,
     CiMail,
     CiTwitter,
} from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Header = () => {
     const [show, setShow] = useState(false);
     return (
          <>
               <div className="sticky backdrop-blur-3xl top-0 z-40">
                    <div className="bg-[#005461]">
                         <div className="hidden md:flex justify-between lg:px-40 md:px-10 items-center container mx-auto py-2 text-white">
                              <div className="flex items-center md:gap-2 lg:gap-5">
                                   <div className="flex items-center gap-1">
                                        <CiLocationOn className="text-xl" />
                                        <p>
                                             House 81/4 Sector 17/11, Uttara,
                                             Dhaka-1230
                                        </p>
                                   </div>
                                   <div className="flex items-center gap-1">
                                        <CiMail className="text-xl" />
                                        <a href="mailto:prefixhubsolution@gmail.com">
                                             prefixhubsolution@gmail.com
                                        </a>
                                   </div>
                              </div>
                              <div className="flex items-center gap-1">
                                   <a
                                        target="_blank"
                                        href="https://www.facebook.com/PrefixHubitSolutions"
                                   >
                                        <CiFacebook className="text-3xl p-0.5 hover:bg-[#018790] rounded-full duration-200" />
                                   </a>

                                   <a
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                   >
                                        <CiInstagram className="text-3xl p-0.5 hover:bg-[#018790] rounded duration-200" />
                                   </a>
                                   <a
                                        target="_blank"
                                        href="https://www.linkedin.com/"
                                   >
                                        <CiLinkedin className="text-3xl p-0.5 hover:bg-[#018790] rounded duration-200" />
                                   </a>

                                   <a target="_blank" href="https://x.com/">
                                        <CiTwitter className="text-3xl p-0.5 hover:bg-[#018790] rounded-full duration-200" />
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="navbar shadow-sm z-30">
                         <div className="flex items-center relative justify-between w-full">
                              <a
                                   href={"/"}
                                   className="text-xl font-bold"
                                   title="Prefix Hub IT Solution"
                              >
                                   <img
                                        src="Logo/Logo1.png"
                                        alt="Prefix Hub IT Solution logo"
                                        className="w-30 md:w-50"
                                   />
                              </a>

                              <div className="lg:hidden">
                                   {show ? (
                                        <button onClick={() => setShow(false)}>
                                             <HiXMark className="text-2xl" />
                                        </button>
                                   ) : (
                                        <button onClick={() => setShow(true)}>
                                             <IoMenuOutline className="text-2xl" />
                                        </button>
                                   )}
                              </div>

                              {show && (
                                   <div className="flex flex-col absolute bg-[#005461] right-0 top-10 rounded-xl text-white p-3">
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/"}
                                        >
                                             Home
                                        </NavLink>
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/services"}
                                        >
                                             Services
                                        </NavLink>
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/industries"}
                                        >
                                             Industries
                                        </NavLink>
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/team"}
                                        >
                                             Team Members
                                        </NavLink>
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/about"}
                                        >
                                             About
                                        </NavLink>
                                        <NavLink
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? "px-3 py-1 bg-black/10 rounded-md"
                                                       : "px-2 py-1"
                                             }
                                             to={"/contact"}
                                        >
                                             Contact
                                        </NavLink>
                                   </div>
                              )}
                         </div>
                         <div className="navbar-center text-xl hidden lg:flex gap-2 font-medium text-[#005461]">
                              <div className="">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                                  : "px-4 py-2 hover:bg-black/10 rounded-md"
                                        }
                                        to={"/"}
                                   >
                                        Home
                                   </NavLink>
                              </div>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive
                                             ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                             : "px-4 py-2 hover:bg-black/10 rounded-md"
                                   }
                                   to={"/services"}
                              >
                                   Services
                              </NavLink>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive
                                             ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                             : "px-4 py-2 hover:bg-black/10 rounded-md"
                                   }
                                   to={"/industries"}
                              >
                                   Industries
                              </NavLink>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive
                                             ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                             : "px-4 py-2 hover:bg-black/10 rounded-md"
                                   }
                                   to={"/team"}
                              >
                                   Team Members
                              </NavLink>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive
                                             ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                             : "px-4 py-2 hover:bg-black/10 rounded-md"
                                   }
                                   to={"/about"}
                              >
                                   About
                              </NavLink>
                              <NavLink
                                   className={({ isActive }) =>
                                        isActive
                                             ? "px-4 py-2 bg-black/10 hover:bg-black/10 rounded-md duration-200"
                                             : "px-4 py-2 hover:bg-black/10 rounded-md"
                                   }
                                   to={"/contact"}
                              >
                                   Contact
                              </NavLink>
                         </div>
                         <div className="navbar-end hidden md:flex">
                              <div>
                                   <Link
                                        to="tel:+8801518934337"
                                        title="Have any questions?"
                                        className="p-2 flex items-center gap-2 px-3 bg-[#005461] hover:bg-[#018790] duration-200 rounded text-white"
                                   >
                                        <IoMdCall />
                                        <span>+8801518934337</span>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Header;
