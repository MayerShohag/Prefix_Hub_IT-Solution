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

export default function ServicesSection() {
     return (
          <section className="w-full py-20 bg-gray-50">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                              Our Services
                         </h2>
                         <p className="text-gray-600 max-w-2xl mx-auto">
                              We're dedicated to delivering world-class
                              technology solutions that help businesses grow,
                              innovate, and stay secure.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                   <p className=" text-sm leading-relaxed">
                                        {service.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
