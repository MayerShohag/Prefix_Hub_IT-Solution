import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

export default function Footer() {
     return (
          <footer className="bg-gray-900 text-gray-300 pt-15">
               <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                         <div className="mb-5">
                              <img
                                   src="Logo/IDENTITY (2).png"
                                   alt="Company Logo"
                                   className="w-30 h-12 object-cover rounded-lg"
                              />
                         </div>

                         <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              We provide secure, scalable and modern IT
                              solutions to help businesses evolve and stay ahead
                              in the digital era.
                         </p>

                         <h4 className="text-white font-semibold mb-2">
                              Our Location
                         </h4>
                         <p className="text-gray-400 text-sm">
                              Level-4 House 81 Road 17 Sector 11, <br /> Uttara,
                              Dhaka-1230, Bangladesh
                         </p>
                    </div>

                    <div>
                         <h4 className="text-white font-semibold mb-4 text-lg">
                              Quick Links
                         </h4>
                         <ul className="space-y-3 text-gray-400 text-sm">
                              <li>
                                   <a
                                        href="#about"
                                        className="hover:text-white transition"
                                   >
                                        About Us
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#services"
                                        className="hover:text-white transition"
                                   >
                                        Our Services
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#team"
                                        className="hover:text-white transition"
                                   >
                                        Team
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#contact"
                                        className="hover:text-white transition"
                                   >
                                        Contact
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#careers"
                                        className="hover:text-white transition"
                                   >
                                        Careers
                                   </a>
                              </li>
                         </ul>
                    </div>

                    <div>
                         <h4 className="text-white font-semibold mb-4 text-lg">
                              Contact Us
                         </h4>
                         <ul className="space-y-2 text-gray-400 text-sm mb-6">
                              <li>Email: support@prefixhubitsolution.com</li>
                              <li>Phone: +880 1720-580133</li>
                              <li>Working Hours: Everyday 9AM - 7PM</li>
                         </ul>

                         <h4 className="text-white font-semibold mb-3 text-lg">
                              Follow Us
                         </h4>
                         <div className="flex gap-2 text-xl">
                              <a
                                   href="#"
                                   className="hover:text-white transition"
                              >
                                   <CiFacebook className="text-2xl" />
                              </a>
                              <a
                                   href="#"
                                   className="hover:text-white transition"
                              >
                                   <CiLinkedin className="text-2xl" />
                              </a>
                              <a
                                   href="#"
                                   className="hover:text-white transition"
                              >
                                   <CiTwitter className="text-2xl" />
                              </a>
                              <a
                                   href="#"
                                   className="hover:text-white transition"
                              >
                                   <CiInstagram className="text-2xl" />
                              </a>
                         </div>
                    </div>
               </div>

               <div className="mt-15 border-t border-gray-700 py-8 text-center text-gray-500 text-sm">
                    &copy;Copyright {new Date().getFullYear()} PrefixHub IT
                    Solution. All rights reserved.
               </div>
          </footer>
     );
}
