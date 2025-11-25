import { useState } from "react";
import { SiTicktick } from "react-icons/si";

const services = [
     {
          id: 1,
          title: "IPS Support and Maintain",
          description:
               "Incident, Problem, and Service management support ensuring stable IT operations, continuous monitoring, and quick issue resolution.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-support-icon-svg-download-png-11223601.png?f=webp&w=512",
     },
     {
          id: 2,
          title: "IT Support and Services",
          description:
               "End-to-end IT assistance including troubleshooting, system setup, maintenance, and professional technical support.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-chat-service-icon-svg-download-png-7095139.png?f=webp&w=512",
     },
     {
          id: 3,
          title: "Server Management",
          description:
               "Server setup, monitoring, optimization, and security for cloud and on-premise infrastructures.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-database-management-icon-svg-download-png-2959143.png?f=webp&w=512",
     },
     {
          id: 4,
          title: "Software Services",
          description:
               "Custom software design, development, deployment, integration, and ongoing maintenance for business applications.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-customer-services-icon-svg-download-png-8959441.png?f=webp&w=512", // software development icon
     },
     {
          id: 5,
          title: "Web Design & Development",
          description:
               "Responsive, modern, and performance-optimized websites built with user-centric UI and latest technologies.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-web-design-icon-svg-download-png-7618827.png?f=webp&w=512",
     },
     {
          id: 6,
          title: "Graphics Design & UI/UX",
          description:
               "Creative graphic design, branding, mockups, and UI/UX solutions for web and mobile applications.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-ux-design-icon-svg-download-png-1316301.png?f=webp&w=512",
     },
     {
          id: 7,
          title: "E-commerce & Digital Marketing",
          description:
               "E-commerce development, SEO, social media management, and digital marketing strategies to grow your business.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-digital-marketing-icon-svg-download-png-5329127.png?f=webp&w=512",
     },
     {
          id: 8,
          title: "Cyber Security Solution",
          description:
               "Security audits, threat monitoring, vulnerability scanning, and data protection solutions.",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-cyber-defence-icon-svg-download-png-12201747.png?f=webp&w=512",
     },
];

const chooseUs = [
     {
          id: 1,
          title: "Experienced and certified professionals",
          image: "https://www.moneytalksnews.com/workers/images/width=730/wp-content/uploads/2024/02/20132956/shutterstock_582865057-scaled.jpg?s=6f9b49ac3507e6f8229123b2d36c214cb307f602f919f57d579de3f46341780d",
     },
     {
          id: 2,
          title: "Modern tech stack & latest tools",
          image: "https://cdn.prod.website-files.com/6411ed887234f8a63288b30c/6902409f0a4da589028868f7_cover%20for%20webpagesblogs%20(1).png",
     },
     {
          id: 3,
          title: "Scalable and secure infrastructure",
          image: "https://www.soapeople.com/hubfs/IM%26C%20Sales%20%26%20Marketinglow.jpg",
     },
     {
          id: 4,
          title: "Customer-driven development process",
          image: "https://dev.kaartech.com/wp-content/uploads/2024/06/Path-For-Experienced-Professionals.webp",
     },
     {
          id: 3,
          title: "Scalable and secure infrastructure",
          image: "https://www.soapeople.com/hubfs/IM%26C%20Sales%20%26%20Marketinglow.jpg",
     },
     {
          id: 4,
          title: "Customer-driven development process",
          image: "https://dev.kaartech.com/wp-content/uploads/2024/06/Path-For-Experienced-Professionals.webp",
     },
];

export default function Services() {
     const [choose, setChoose] = useState(
          "https://www.moneytalksnews.com/workers/images/width=730/wp-content/uploads/2024/02/20132956/shutterstock_582865057-scaled.jpg?s=6f9b49ac3507e6f8229123b2d36c214cb307f602f919f57d579de3f46341780d"
     );
     return (
          <section className="w-full bg-gray-50 py-16">
               <div className="">
                    <section className="container mx-auto lg:px-40 px-5 bg-gray-50 mb-20">
                         <div className="">
                              <div className="text-center mb-14">
                                   <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                        Our Services
                                   </h2>
                                   <p className="text-gray-600 max-w-2xl mx-auto">
                                        We're dedicated to delivering
                                        world-class technology solutions that
                                        help businesses grow, innovate, and stay
                                        secure.
                                   </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                   {services.map((service, idx) => (
                                        <div
                                             key={idx}
                                             className="group p-8 bg-white hover:bg-accent hover:text-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        >
                                             <div className="text-5xl mb-5 w-30">
                                                  <img
                                                       src={service.icon}
                                                       alt={service.title}
                                                       className="w-full"
                                                  />
                                             </div>
                                             <h3 className="text-xl font-semibold mb-2">
                                                  {service.title}
                                             </h3>
                                             <p className="text-sm leading-relaxed">
                                                  {service.description}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </section>

                    <div className="bg-gray-900 w-full text-white">
                         <div className="p-10 py-20 rounded-2xl shadow-md mb-16 container mx-auto lg:px-40">
                              <h3 className="text-3xl text-gray-200 font-semibold lg:mb-10 mb-5 text-center">
                                   Why Choose Us?
                              </h3>
                              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-5">
                                   <div className="lg:w-150 h-auto rounded-xl">
                                        <div className="mb-5">
                                             <h1 className="font-bold lg:text-3xl text-xl text-gray-200 mb-2">
                                                  PrefixHub Solution In the
                                                  Press
                                             </h1>
                                             <p className="lg:pr-20 text-sm text-gray-400">
                                                  PrefixHub Solution
                                                  Communications, Inc. has been
                                                  featured in the press of
                                                  Forbes and several other
                                                  publications. Visit the page
                                                  to look at our mentions in the
                                                  esteemed publications.
                                             </p>
                                        </div>
                                        <div className="lg:w-150 lg:h-100 rounded-xl">
                                             <img
                                                  src={choose}
                                                  className="w-full object-cover rounded-xl h-full duration-300"
                                                  alt={choose}
                                             />
                                        </div>
                                   </div>
                                   <ul className="grid grid-cols-1 h-fit gap-4 text-gray-700">
                                        {chooseUs.map((chose) => (
                                             <li
                                                  onClick={() =>
                                                       setChoose(chose.image)
                                                  }
                                                  key={chose.id}
                                                  className="flex items-center cursor-pointer gap-2 text-gray-300 bg-gray-800 p-3 rounded-md"
                                             >
                                                  <SiTicktick className="text-accent text-xl lg:text-2xl" />
                                                  <span className="lg:text-lg">
                                                       {chose.title}
                                                  </span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    </div>

                    <div className="mb-16 container mx-auto lg:px-40 px-5">
                         <h3 className="text-3xl font-semibold text-center mb-8">
                              Our Working Process
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                              {[
                                   "Planning",
                                   "Design",
                                   "Development",
                                   "Deployment",
                              ].map((step, i) => (
                                   <div
                                        key={i}
                                        className="bg-white shadow rounded-2xl p-6 text-center"
                                   >
                                        <div className="text-4xl font-bold text-blue-600 mb-2">
                                             {i + 1}
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2">
                                             {step}
                                        </h4>
                                        <p className="text-gray-600">
                                             We follow a clean and structured
                                             workflow for better results.
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
               <div className="text-center lg:mx-40 mx-5  bg-blue-600 text-white p-10 rounded-2xl shadow-md">
                    <h3 className="text-3xl font-semibold mb-4">
                         Ready to Start Your Project?
                    </h3>
                    <p className="mb-6 text-lg">
                         Let’s build something great together.
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
                         Contact Us
                    </button>
               </div>
          </section>
     );
}
