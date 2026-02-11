import { Link } from "react-router";

const services = [
     {
          id: 1,
          title: "ISP Support & Maintenance Services",
          description: [
               "ISP Network Setup & Configuration",
               "Internet Connectivity Troubleshooting",
               "Router, Switch & Firewall Configuration",
               "Bandwidth Management & Monitoring",
               "Network Security & Access Control",
               "Ongoing ISP Support & Preventive Maintenance",
               "24/7 Monitoring & Incident Response",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-support-icon-svg-download-png-11223601.png?f=webp&w=512",
     },
     {
          id: 2,
          title: "IT Support and Services",
          description: [
               "IT Infrastructure Setup & Management",
               "Desktop & Laptop Support",
               "Server Installation & Maintenance",
               "Network & Security Setup (LAN/WAN/Wi-Fi, Router, Firewall)",
               "OS & Software Installation / Troubleshooting",
               "Email & Cloud Support",
               "Data Backup & Recovery",
               "System Monitoring & Optimization",
               "Printer / Peripheral Support",
               "Remote & On-Site IT Support",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-chat-service-icon-svg-download-png-7095139.png?f=webp&w=512",
     },
     {
          id: 3,
          title: "Server & Hosting Management",
          description: [
               "Domain Registration & Management",
               "Web Hosting, VPS / RDP Setup & Management",
               "Mail Server, Windows & Linux Server Management",
               "Cloud Server Administration (AWS, Azure, Google Cloud)",
               "SSL Certificate Installation",
               "Backup & Disaster Recovery Solutions",
               "Performance Monitoring & Optimization",
               "Remote & On-Site Support",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-database-management-icon-svg-download-png-2959143.png?f=webp&w=512",
     },
     {
          id: 4,
          title: "Web Development Services",
          description: [
               "Custom Website Development (HTML, CSS, JavaScript)",
               "Business & Corporate Websites",
               "E-commerce Website Development",
               "CMS Development (WordPress, Shopify)",
               "Web Application Development",
               "Website Maintenance & Support",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-customer-services-icon-svg-download-png-8959441.png?f=webp&w=512", // software development icon
     },
     {
          id: 5,
          title: "Software Services",
          description: [
               "Custom Software & Web Apps",
               "Mobile App Development (Android & iOS)",
               "ERP / CRM Solutions",
               "SaaS Product Development",
               "Software Testing & Maintenance",
               "UI/UX Design",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-web-design-icon-svg-download-png-7618827.png?f=webp&w=512",
     },
     {
          id: 6,
          title: "Graphics Design",
          description: [
               " Logo & Brand Identity Design",
               "Social Media Graphics",
               "Banner, Flyer & Brochure Design",
               "Poster & Marketing Materials",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-ux-design-icon-svg-download-png-1316301.png?f=webp&w=512",
     },
     {
          id: 7,
          title: "E-commerce & Digital Marketing",
          description: [
               "E-commerce Website Development",
               "Online Store Setup & Management",
               "Social Media Marketing (Facebook, Instagram, LinkedIn)",
               "Search Engine Optimization (SEO)",
               "Google Ads & Paid Campaigns",
               "Content Marketing & Blogging",
               "Email Marketing",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-digital-marketing-icon-svg-download-png-5329127.png?f=webp&w=512",
     },
     {
          id: 8,
          title: "Cyber Security Solutions",
          description: [
               "Website Security Audit",
               "Malware & Virus Removal",
               "Data Protection & Backup",
               "Network Security & Firewall Configuration",
               "Secure Authentication Setup",
               "Penetration Testing (Basic)",
               "Continuous Security Monitoring & Support",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-cyber-defence-icon-svg-download-png-12201747.png?f=webp&w=512",
     },
     {
          id: 9,
          title: "Training Services",
          description: [
               "ISP & Networking (MikroTik, Routing, Switching, Management & Configuration)",
               "IT Support & System Maintenance Training",
               "Web Development (HTML, CSS, JavaScript, PHP)",
               "Graphic Design & UI/UX Training",
               "Freelancing Skills (Digital Marketing, SEO, Content Creation, E-commerce)",
               "Computer Basics & Advanced IT Training",
          ],
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-presentation-icon-svg-download-png-6019477.png?f=webp&w=512",
     },
];

export default function ServicesSection() {
     return (
          <section className="w-full py-20 bg-gray-50">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-6xl font-semibold text-[#005461] mb-3">
                              Our Services
                         </h2>
                         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                              We're dedicated to delivering world-class
                              technology solutions that help businesses grow,
                              innovate, and stay secure.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                         {services.map((service) => (
                              <Link
                                   to={`/services`}
                                   key={service.id}
                                   className="group p-8 bg-[#018790] shadow-2xl text-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                              >
                                   <div className="text-5xl mb-5 w-30">
                                        <img
                                             src={service.icon}
                                             alt={service.title}
                                             className="w-full"
                                        />
                                   </div>
                                   <h3 className="text-xl font-medium mb-2">
                                        {service.title}
                                   </h3>
                                   <div className="text-sm font-light leading-relaxed pl-3">
                                        {service.description?.map(
                                             (serv, idx) => (
                                                  <li className="" key={idx}>
                                                       {serv}
                                                  </li>
                                             ),
                                        )}
                                   </div>
                              </Link>
                         ))}
                    </div>
               </div>
          </section>
     );
}
