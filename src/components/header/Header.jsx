import {
     CiClock2,
     CiFacebook,
     CiInstagram,
     CiLinkedin,
     CiLocationOn,
     CiMail,
     CiTwitter,
} from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router";

const Header = () => {
     return (
          <>
               <div>
                    <div className="bg-accent">
                         <div className="hidden md:flex justify-between lg:px-40 md:px-10 items-center container mx-auto py-2 text-white">
                              <div className="flex items-center md:gap-2 lg:gap-5">
                                   <div className="flex items-center gap-1">
                                        <CiLocationOn className="text-3xl" />
                                        <p>Uttara, Dhaka</p>
                                   </div>
                                   <div className="flex items-center gap-1">
                                        <CiClock2 className="text-3xl" />
                                        <p>9AM - 7PM Everyday</p>
                                   </div>
                                   <div className="flex items-center gap-1">
                                        <CiMail className="text-3xl" />
                                        <a href="mailto:">
                                             avijitroy@gmail.com
                                        </a>
                                   </div>
                              </div>
                              <div className="flex items-center gap-3">
                                   <a href="https://www.facebook.com/">
                                        <CiFacebook className="text-3xl hover:bg-[#DA3343] rounded-full duration-200" />
                                   </a>

                                   <a href="https://www.instagram.com/">
                                        <CiInstagram className="text-3xl hover:bg-[#DA3343] rounded duration-200" />
                                   </a>
                                   <a href="https://www.linkedin.com/">
                                        <CiLinkedin className="text-3xl hover:bg-[#DA3343] rounded duration-200" />
                                   </a>

                                   <a href="https://x.com/">
                                        <CiTwitter className="text-3xl hover:bg-[#DA3343] rounded-full duration-200" />
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="navbar bg-base-100 shadow-sm">
                         <div className="navbar-start">
                              <div className="dropdown">
                                   <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost lg:hidden"
                                   >
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                        >
                                             {" "}
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h14M4 12h8m-8 6h16"
                                             />{" "}
                                        </svg>
                                   </div>
                                   <ul
                                        tabIndex="-1"
                                        className="menu menu-sm font-bold text-blue-950 border border-gray-200 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                   >
                                        <Link
                                             className="px-2 py-1 hover:bg-black/10 rounded"
                                             to={"/"}
                                        >
                                             Home
                                        </Link>
                                        <Link
                                             className="px-2 py-1 hover:bg-black/10 rounded"
                                             to={"/services"}
                                        >
                                             Services
                                        </Link>
                                        <Link
                                             className="px-2 py-1 hover:bg-black/10 rounded"
                                             to={"/it-solutions"}
                                        >
                                             IT Solutions
                                        </Link>
                                        <Link
                                             className="px-2 py-1 hover:bg-black/10 rounded"
                                             to={"/team"}
                                        >
                                             Team Members
                                        </Link>
                                        <Link
                                             className="px-2 py-1 hover:bg-black/10 rounded"
                                             to={"/contact"}
                                        >
                                             Contact
                                        </Link>
                                   </ul>
                              </div>
                              <Link
                                   to={"/"}
                                   className="text-xl font-bold"
                                   title="Prefix Hub IT Solution"
                              >
                                   Prefix Hub IT Solution
                              </Link>
                         </div>
                         <div className="navbar-center hidden lg:flex gap-5 font-bold text-blue-950 ">
                              <Link
                                   className="px-4 py-2 hover:bg-black/10 rounded duration-200"
                                   to={"/"}
                              >
                                   Home
                              </Link>
                              <Link
                                   className="px-4 py-2 hover:bg-black/10 rounded duration-200"
                                   to={"/services"}
                              >
                                   Services
                              </Link>
                              <Link
                                   className="px-4 py-2 hover:bg-black/10 rounded duration-200"
                                   to={"/it-solutions"}
                              >
                                   IT Solutions
                              </Link>
                              <Link
                                   className="px-4 py-2 hover:bg-black/10 rounded duration-200"
                                   to={"/team"}
                              >
                                   Team Members
                              </Link>
                              <Link
                                   className="px-4 py-2 hover:bg-black/10 rounded duration-200"
                                   to={"/contact"}
                              >
                                   Contact
                              </Link>
                         </div>
                         <div className="navbar-end">
                              <div>
                                   <Link
                                        to="tel:+8801720580133"
                                        title="Have any questions?"
                                        className="p-2 flex items-center gap-2 px-3 bg-accent hover:bg-[#DA3343] duration-200 rounded text-white"
                                   >
                                        <IoMdCall />
                                        <span>+88 01720-580-133</span>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Header;
