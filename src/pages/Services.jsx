import { AiOutlineFileSearch, AiOutlineSolution } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
     PiHandshake,
     PiLightbulbFilamentLight,
     PiRankingLight,
     PiTargetLight,
     PiTestTubeLight,
} from "react-icons/pi";
import { SiAlwaysdata } from "react-icons/si";
import { TfiStatsUp } from "react-icons/tfi";

const services = [
     {
          id: 1,
          url: "Picture/Ingenieur-reseau-1.jpeg",
          title: "ISP Support & Maintenance Services",
          description: [
               {
                    title: "ISP Network Setup & Configuration",
                    details: "Comprehensive planning, design, and deployment of ISP network infrastructure, including backbone connectivity, routing protocols, IP addressing, and network optimization to ensure high availability, scalability, and reliable internet services.",
               },
               {
                    title: "Internet Connectivity Troubleshooting",
                    details: "In-depth diagnosis and resolution of internet connectivity issues such as latency, packet loss, intermittent connections, and outages, ensuring minimal downtime and consistent service quality for end users.",
               },
               {
                    title: "Router, Switch & Firewall Configuration",
                    details: "Advanced configuration and management of routers, switches, and firewalls to optimize traffic flow, enforce security policies, and ensure seamless communication across the network infrastructure.",
               },
               {
                    title: "Bandwidth Management & Monitoring",
                    details: "Continuous monitoring and intelligent allocation of bandwidth to prevent congestion, prioritize critical services, and maintain optimal network performance during peak usage periods.",
               },
               {
                    title: "Network Security & Access Control",
                    details: "Implementation of robust network security measures including firewall rules, intrusion prevention, user authentication, and access control policies to safeguard data and protect against cyber threats.",
               },
               {
                    title: "Ongoing ISP Support & Preventive Maintenance",
                    details: "Proactive support services including regular audits, firmware updates, performance tuning, and preventive maintenance to detect potential issues early and ensure long-term network stability.",
               },
               {
                    title: "24/7 Monitoring & Incident Response",
                    details: "Round-the-clock network monitoring with real-time alerts and rapid incident response to identify, isolate, and resolve network failures, ensuring uninterrupted internet service and operational continuity.",
               },
          ],
     },
     {
          id: 2,
          url: "Picture/isp-support.jpg",
          title: "IT Support and Services",
          description: [
               {
                    title: "IT Infrastructure Setup & Management",
                    details: "Complete planning, deployment, and management of IT systems to ensure reliability and scalability.",
               },
               {
                    title: "Desktop & Laptop Support",
                    details: "Configuration, maintenance, and troubleshooting of desktops and laptops to ensure smooth and reliable daily operations.",
               },
               {
                    title: "Server Installation & Maintenance",
                    details: "Setup, monitoring, and ongoing maintenance of servers to support business applications and data reliability.",
               },
               {
                    title: "Network & Security Setup (LAN/WAN/Wi-Fi, Router, Firewall)",
                    details: "Design and implementation of secure network infrastructure with properly configured routers, firewalls, and wireless systems.",
               },
               {
                    title: "OS & Software Installation / Troubleshooting",
                    details: "Installation, updates, and issue resolution for operating systems and business-critical software.",
               },
               {
                    title: "Email & Cloud Support",
                    details: "Management and support of email systems and cloud platforms to enable seamless communication and collaboration.",
               },
               {
                    title: "Data Backup & Recovery",
                    details: "Reliable backup solutions and fast data recovery to protect against data loss and system failures.",
               },
               {
                    title: "System Monitoring & Optimization",
                    details: "Continuous monitoring and performance optimization to ensure system stability and minimize downtime.",
               },
               {
                    title: "Printer / Peripheral Support",
                    details: "Setup and maintenance of printers and peripheral devices for uninterrupted office productivity.",
               },
               {
                    title: "Remote & On-Site IT Support",
                    details: "Fast and dependable technical support delivered remotely or on-site to resolve IT issues efficiently.",
               },
          ],
     },
     {
          id: 3,
          url: "Picture/pexels-divinetechygirl-1181354.jpg",
          title: "Server & Hosting Management",
          description: [
               {
                    title: "Domain Registration & Management",
                    details: "Registration, configuration, and ongoing management of domains to ensure secure and uninterrupted online presence.",
               },
               {
                    title: "Web Hosting, VPS / RDP Setup & Management",
                    details: "Setup and management of web hosting, VPS, and RDP environments to deliver reliable and high-performance hosting solutions.",
               },
               {
                    title: "Mail Server, Windows & Linux Server Management",
                    details: "Administration and maintenance of mail servers and Windows/Linux servers to ensure security, stability, and efficiency.",
               },
               {
                    title: "Cloud Server Administration (AWS, Azure, Google Cloud)",
                    details: "Management and optimization of cloud servers across AWS, Azure, and Google Cloud platforms for scalable operations.",
               },
               {
                    title: "SSL Certificate Installation",
                    details: "Installation and renewal of SSL certificates to secure websites and protect data transmission.",
               },
               {
                    title: "Backup & Disaster Recovery Solutions",
                    details: "Implementation of secure backup systems and disaster recovery plans to protect critical data and ensure business continuity.",
               },
               {
                    title: "Performance Monitoring & Optimization",
                    details: "Continuous monitoring and tuning of server performance to improve speed, reliability, and resource utilization.",
               },
               {
                    title: "Remote & On-Site Support",
                    details: "Expert technical assistance provided remotely or on-site to quickly resolve server and hosting-related issues.",
               },
          ],
     },
     {
          id: 4,
          url: "Picture/pexels-tranmautritam-326501.jpg",
          title: "Web Development Services",
          description: [
               {
                    title: "Custom Website Development (HTML, CSS, JavaScript)",
                    details: "Design and development of responsive, high-performance websites using modern web technologies.",
               },
               {
                    title: "Business & Corporate Websites",
                    details: "Professional website solutions tailored to represent brands and support business objectives.",
               },
               {
                    title: "E-commerce Website Development",
                    details: "Development of secure and scalable e-commerce platforms with seamless shopping experiences.",
               },
               {
                    title: "CMS Development (WordPress, Shopify)",
                    details: "Custom CMS solutions that allow easy content management and website scalability.",
               },
               {
                    title: "Web Application Development",
                    details: "Creation of dynamic, feature-rich web applications tailored to business needs.",
               },
               {
                    title: "Website Maintenance & Support",
                    details: "Ongoing updates, security monitoring, and technical support to keep websites running smoothly.",
               },
          ],
     },
     {
          id: 5,
          url: "Picture/pexels-pavel-danilyuk-7658366.jpg",
          title: "Software Services",
          description: [
               {
                    title: "Custom Software & Web Apps",
                    details: "Development of tailored software solutions and web applications to streamline business operations.",
               },
               {
                    title: "Mobile App Development (Android & iOS)",
                    details: "Design and development of high-quality mobile applications for Android and iOS platforms.",
               },
               {
                    title: "ERP / CRM Solutions",
                    details: "Implementation of ERP and CRM systems to improve business processes and customer management.",
               },
               {
                    title: "SaaS Product Development",
                    details: "End-to-end development of scalable and secure Software-as-a-Service platforms.",
               },
               {
                    title: "Software Testing & Maintenance",
                    details: "Comprehensive testing and ongoing maintenance to ensure software quality and reliability.",
               },
               {
                    title: "UI/UX Design",
                    details: "User-centered design solutions focused on intuitive interfaces and engaging user experiences.",
               },
          ],
     },
     {
          id: 6,
          url: "Picture/pexels-mart-production-7679865.jpg",
          title: "Graphics Design",
          description: [
               {
                    title: "Logo & Brand Identity Design",
                    details: "Creative logo and brand identity designs that reflect brand values and create a strong visual presence.",
               },
               {
                    title: "Social Media Graphics",
                    details: "Eye-catching graphics designed to boost engagement across social media platforms.",
               },
               {
                    title: "Banner, Flyer & Brochure Design",
                    details: "Professional design of banners, flyers, and brochures for effective marketing and promotions.",
               },
               {
                    title: "Poster & Marketing Materials",
                    details: "Visually appealing posters and marketing materials to support advertising campaigns.",
               },
          ],
     },
     {
          id: 7,
          url: "Picture/pexels-pixabay-265087.jpg",
          title: "E-commerce & Digital Marketing",
          description: [
               {
                    title: "E-commerce Website Development",
                    details: "Design and development of secure, user-friendly e-commerce websites for online selling.",
               },
               {
                    title: "Online Store Setup & Management",
                    details: "Complete setup and ongoing management of online stores to ensure smooth operations.",
               },
               {
                    title: "Social Media Marketing (Facebook, Instagram, LinkedIn)",
                    details: "Strategic social media campaigns to increase brand awareness and audience engagement.",
               },
               {
                    title: "Search Engine Optimization (SEO)",
                    details: "Optimization strategies to improve website visibility and ranking on search engines.",
               },
               {
                    title: "Google Ads & Paid Campaigns",
                    details: "Creation and management of paid advertising campaigns to drive targeted traffic and conversions.",
               },
               {
                    title: "Content Marketing & Blogging",
                    details: "Content creation and blogging strategies to build authority and attract organic traffic.",
               },
               {
                    title: "Email Marketing",
                    details: "Targeted email campaigns designed to nurture leads and strengthen customer relationships.",
               },
          ],
     },
     {
          id: 8,
          url: "Picture/pexels-mikhail-nilov-6963098.jpg",
          title: "Cyber Security Solutions",
          description: [
               {
                    title: "Website Security Audit",
                    details: "Comprehensive assessment of website vulnerabilities to identify and mitigate security risks.",
               },
               {
                    title: "Malware & Virus Removal",
                    details: "Detection and removal of malware, viruses, and other threats to protect systems and data.",
               },
               {
                    title: "Data Protection & Backup",
                    details: "Implementation of data protection strategies and backup solutions to prevent loss and ensure recovery.",
               },
               {
                    title: "Network Security & Firewall Configuration",
                    details: "Setup and management of firewalls and network security measures to safeguard against cyber attacks.",
               },
               {
                    title: "Secure Authentication Setup",
                    details: "Configuration of secure authentication systems, including multi-factor authentication, to protect access.",
               },
               {
                    title: "Penetration Testing (Basic)",
                    details: "Simulated attacks to identify potential vulnerabilities and strengthen system security.",
               },
               {
                    title: "Continuous Security Monitoring & Support",
                    details: "Ongoing monitoring and technical support to detect threats and maintain a secure IT environment.",
               },
          ],
     },
     {
          id: 9,
          url: "Picture/pexels-cookiecutter-17323801.jpg",
          title: "Training Services",
          description: [
               {
                    title: "ISP & Networking (MikroTik, Routing, Switching, Management & Configuration)",
                    details: "Hands-on training on ISP networking, routing, switching, and configuration for professional skill development.",
               },
               {
                    title: "IT Support & System Maintenance Training",
                    details: "Practical training in IT support, system maintenance, and troubleshooting techniques.",
               },
               {
                    title: "Web Development (HTML, CSS, JavaScript, PHP)",
                    details: "Comprehensive web development training covering front-end and back-end technologies.",
               },
               {
                    title: "Graphic Design & UI/UX Training",
                    details: "Training on graphic design principles and UI/UX practices to create engaging digital experiences.",
               },
               {
                    title: "Freelancing Skills (Digital Marketing, SEO, Content Creation, E-commerce)",
                    details: "Skill-building programs for freelancing in digital marketing, SEO, content creation, and online business management.",
               },
               {
                    title: "Computer Basics & Advanced IT Training",
                    details: "Structured training from fundamental computer skills to advanced IT concepts for all levels of learners.",
               },
          ],
     },
];

const ourWorkingProcess = [
     {
          id: 1,
          iconn: <AiOutlineFileSearch className="text-6xl" />,
          title: "Requirement Analysis",
          description:
               "We understand your business needs, challenges, and goals to design the right IT solution.",
     },
     {
          id: 2,
          iconn: <PiTargetLight className="text-6xl" />,
          title: "Planning & Strategy",
          description:
               "Our experts create a customized plan covering technology, security, timeline, and budget.",
     },
     {
          id: 3,
          iconn: <SiAlwaysdata className="text-6xl" />,
          title: "Implementation",
          description:
               "We deploy solutions efficiently—whether it’s IT infrastructure, networking, servers, software, or digital services.",
     },
     {
          id: 4,
          iconn: <PiTestTubeLight className="text-6xl" />,
          title: "Testing & Optimization",
          description:
               "Systems are tested, optimized, and secured to ensure smooth performance and reliability.",
     },
     {
          id: 5,
          iconn: <PiHandshake className="text-6xl" />,
          title: "Support & Maintenance",
          description:
               "We provide continuous remote and on-site support, monitoring, updates, and preventive maintenance.",
     },
     {
          id: 6,
          iconn: <TfiStatsUp className="text-6xl p-1" />,
          title: "Growth & Scalability",
          description:
               "As your business grows, we help you scale with advanced technology and future-ready solutions.",
     },
];

export default function Services() {
     return (
          <section className="w-full bg-gray-50 py-16">
               <section className="container mx-auto lg:px-40 px-5 mb-20">
                    <div className="">
                         <div className="text-center mb-14">
                              <h2 className="text-3xl lg:text-6xl font-semibold text-[#005461] mb-3">
                                   Our Services
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                   We're dedicated to delivering world-class
                                   technology solutions that help businesses
                                   grow, innovate, and stay secure.
                              </p>
                         </div>

                         <div className="grid lg:gap-30 gap-10">
                              {services.map((service) => (
                                   <div key={service.id}>
                                        <div>
                                             <h1 className="text-3xl lg:text-6xl font-semibold mb-10">
                                                  #{service.title}
                                             </h1>
                                             <img
                                                  src={service.url}
                                                  alt={service.title}
                                                  className="rounded-2xl h-auto lg:h-150 w-full object-cover"
                                             />
                                        </div>
                                        <div className="border-l-5 rounded-3xl border-black/50 lg:ml-10 ml-5 lg:pl-8 p-5 mt-10">
                                             {service.description.map(
                                                  (serList, idx) => (
                                                       <div key={idx}>
                                                            <h1 className="text-xl font-semibold">
                                                                 {serList.title}
                                                            </h1>
                                                            <p className="text-[16px] mb-4 font-light">
                                                                 {
                                                                      serList.details
                                                                 }
                                                            </p>
                                                       </div>
                                                  )
                                             )}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </section>

               <div className="bg-[#018790] w-full text-white">
                    <div className="p-5 py-20 rounded-2xl shadow-md mb-16 container mx-auto lg:px-40">
                         <div className="text-center lg:col-span-12 lg:mb-20 mb-10">
                              <h2 className="text-3xl lg:text-6xl font-semibold text-gray-200 mb-3">
                                   Why Choose Us?
                              </h2>
                              <p className="text-gray-200 font-light  text-lg max-w-2xl mx-auto">
                                   At PrefixHub IT Solution, we believe in
                                   transforming ideas into technology,
                                   connecting businesses with innovation, and
                                   empowering clients to succeed in a digital
                                   world.
                              </p>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              <div className="border p-5 border-white/20 shadow-xl rounded-2xl bg-white/10">
                                   <span>
                                        <PiRankingLight className="text-6xl" />
                                   </span>
                                   <h1 className="text-2xl font-medium">
                                        Global Vision
                                   </h1>
                                   <p className="text-[16px] font-light">
                                        Our goal is to expand internationally
                                        and deliver world-class IT solutions
                                        across industries.
                                   </p>
                              </div>
                              <div className="border p-5 border-white/20 shadow-xl rounded-2xl bg-white/10">
                                   <span>
                                        <PiLightbulbFilamentLight className="text-6xl" />
                                   </span>
                                   <h1 className="text-2xl font-medium">
                                        Tailored Solutions
                                   </h1>
                                   <p className="text-[16px] font-light">
                                        Services customized to meet
                                        client-specific requirements.
                                   </p>
                              </div>
                              <div className="border p-5 border-white/20 shadow-xl rounded-2xl bg-white/10">
                                   <span>
                                        <GrGroup className="text-6xl" />
                                   </span>
                                   <h1 className="text-2xl font-medium">
                                        Expert Team
                                   </h1>
                                   <p className="text-[16px] font-light">
                                        Skilled professionals with extensive
                                        experience in IT, software, networking,
                                        and digital solutions.
                                   </p>
                              </div>
                              <div className="border p-5 border-white/20 shadow-xl rounded-2xl bg-white/10">
                                   <span>
                                        <MdOutlineSupportAgent className="text-6xl" />
                                   </span>
                                   <h1 className="text-2xl font-medium">
                                        Flexible Support
                                   </h1>
                                   <p className="text-[16px] font-light">
                                        24/7 remote support and on-site
                                        assistance for all technical needs.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="mb-16 container mx-auto lg:px-40 px-5">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-6xl font-semibold text-[#005461] mb-3">
                              Our Working Process
                         </h2>
                         <p className="max-w-2xl mx-auto">
                              At PrefixHub IT Solution, we follow a structured
                              and transparent approach to deliver reliable and
                              high-quality IT services.
                         </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {ourWorkingProcess.map((work) => (
                              <div
                                   key={work.id}
                                   className="border flex flex-col gap-2 p-5 border-black/10 shadow-xl rounded-2xl bg-white/10"
                              >
                                   <span>{work.iconn}</span>
                                   <h1 className="text-2xl font-medium">
                                        {work.title}
                                   </h1>
                                   <p className="text-[16px] font-light">
                                        {work.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
