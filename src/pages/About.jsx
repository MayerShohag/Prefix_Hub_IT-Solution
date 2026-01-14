import { GiOnTarget } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router";

const About = () => {
     const coreServices = [
          {
               id: 1,
               title: "IT Solutions",
               details: "We offer end-to-end IT solutions, including system administration, IT support, server management, and networking infrastructure. Our team ensures that organizations run smoothly, securely, and efficiently with minimal downtime.",
          },
          {
               id: 2,
               title: "Software Development",
               details: "We develop custom software applications tailored to client requirements. From web and mobile apps to enterprise software, we create solutions that streamline processes, enhance productivity, and provide measurable business value.",
          },
          {
               id: 3,
               title: "Networking",
               details: "Our networking services include designing, implementing, and maintaining LAN, WAN, and wireless networks. We specialize in router and switch configurations (MikroTik, Cisco), VPN setup, and network security, ensuring seamless connectivity and robust performance.",
          },
          {
               id: 4,
               title: "Digital Marketing",
               details: "We provide digital marketing solutions to help businesses grow online. Our services include SEO, social media management, content creation, online advertising, and brand promotion, all aimed at boosting visibility and engagement.",
          },
          {
               id: 5,
               title: "Cybersecurity",
               details: "We implement comprehensive cybersecurity strategies to protect business data and networks. This includes firewalls, secure access controls, vulnerability assessments, and monitoring, keeping your digital assets safe from threats.",
          },
          {
               id: 6,
               title: "Training & Support",
               details: "We empower businesses and individuals through professional training programs in IT, networking, software, and cybersecurity. Our training ensures that teams are skilled, confident, and ready to leverage technology effectively.",
          },
     ];
     return (
          <section className="w-full bg-gray-50 py-16 p-5">
               <div className="container mx-auto lg:px-40 px-5 mb-20">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-6xl font-semibold text-[#005461] mb-3">
                              About Us
                         </h2>
                         <p className="text-gray-600 max-w-2xl px-5 mx-auto">
                              A trusted IT solutions partner delivering smart,
                              scalable, and secure technology services.
                         </p>
                    </div>
               </div>
               <section className="max-w-6xl mx-auto">
                    <h2 className="lg:text-6xl text-3xl font-medium">
                         PrefixHub IT Solution Overview
                    </h2>
                    <p className="text-lg font-light mt-2 mb-3">
                         PrefixHub IT Solution is a forward-thinking technology
                         company dedicated to delivering comprehensive IT
                         solutions, software development, networking, digital
                         marketing, cybersecurity, and training services.
                         Founded with the vision of empowering businesses and
                         individuals worldwide, we provide innovative, secure,
                         and reliable technology solutions tailored to meet the
                         diverse needs of modern industries.
                    </p>
                    <div>
                         <img
                              className="rounded"
                              src="Picture/pexels-brett-sayles-4508751.jpg"
                              alt="sample image"
                         />
                    </div>
                    <section className="my-20">
                         <h2 className="lg:text-6xl text-3xl font-medium">
                              Core Services
                         </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                              {coreServices.map((service) => (
                                   <Link
                                        to={"/services"}
                                        key={service.id}
                                        className="border border-black/20 rounded-2xl hover:bg-black/10 hover:shadow-md duration-200 bg-black/5 p-5"
                                   >
                                        <h1 className="text-2xl mb-2 font-medium">
                                             {service.title}
                                        </h1>
                                        <p className="text-[16px] font-light">
                                             {service.details}
                                        </p>
                                   </Link>
                              ))}
                         </div>
                    </section>

                    <section className="mb-20">
                         <h2 className="lg:text-6xl text-3xl font-medium">
                              Our Vision & Mission
                         </h2>
                         <p className="text-lg font-light mt-2 mb-3">
                              To become a global leader in IT solutions,
                              empowering businesses and individuals worldwide
                              with innovative, secure, and reliable technology.
                              Our aim is to expand across countries, delivering
                              cutting-edge IT, networking, software, and digital
                              services, while setting the standard for
                              excellence, innovation, and professional support.”
                         </p>
                         <ul className="text-[16px] font-light">
                              <li className="flex items-center gap-1">
                                   <span>
                                        <TbTargetArrow className="text-lg" />
                                   </span>
                                   Establish international presence with
                                   multiple branches
                              </li>
                              <li className="flex items-center gap-1">
                                   <span>
                                        <TbTargetArrow className="text-lg" />
                                   </span>
                                   Deliver innovative and scalable IT solutions
                                   globally
                              </li>
                              <li className="flex items-center gap-1">
                                   <span>
                                        <TbTargetArrow className="text-lg" />
                                   </span>
                                   Provide professional, secure, and reliable
                                   services
                              </li>
                              <li className="flex items-center gap-1">
                                   <span>
                                        <TbTargetArrow className="text-lg" />
                                   </span>
                                   Empower businesses and individuals to grow
                                   digitally
                              </li>
                         </ul>
                         <div className="border text-center bg-black/5 mt-20 p-5 border-black/20 max-w-4xl mx-auto rounded-2xl">
                              <h2 className="text-3xl lg:text-5xl">Contact with us!</h2>
                              <Link className="mt-5 inline-block border px-5 py-2 text-lg bg-sky-500 hover:bg-sky-600 duration-300 text-white rounded-xl" to={"/contact"}>Contact</Link>
                         </div>
                    </section>
               </section>
          </section>
     );
};

export default About;
