const services = [
     {
          title: "Software Development",
          description:
               "End-to-end software solutions built with scalable architecture and modern technologies.",
          icon: "https://img.icons8.com/?size=100&id=9QHudN9uBhDv&format=png&color=000000",
     },
     {
          title: "Cloud & DevOps Engineering",
          description:
               "Automated pipelines, cloud migration, infrastructure optimization, and cost-efficient scaling.",
          icon: "https://img.icons8.com/?size=100&id=mY6wtgn8wmcp&format=png&color=000000",
     },
     {
          title: "Cyber Security Solutions",
          description:
               "Risk assessments, penetration testing, network protection, and continuous security monitoring.",
          icon: "https://img.icons8.com/?size=100&id=TJtAWRO3Gpa9&format=png&color=000000",
     },
     {
          title: "UI/UX Design & Product Strategy",
          description:
               "User-focused interface design paired with strategic product guidance for market-ready solutions.",
          icon: "https://img.icons8.com/?size=100&id=0bDEs0W6HMnT&format=png&color=000000",
     },
     {
          title: "IT Consulting & Digital Transformation",
          description:
               "Guiding businesses through modernization with expert consulting and long-term strategy.",
          icon: "https://img.icons8.com/?size=100&id=0dbdoPcVxc3N&format=png&color=000000",
     },
     {
          title: "Network Infrastructure Management Services",
          description:
               "High-performance Android & iOS applications built for scale and seamless experiences.",
          icon: "https://img.icons8.com/?size=100&id=sHym0nabShlb&format=png&color=000000",
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
                                   <div className="text-5xl mb-5">
                                        <img
                                             src={service.icon}
                                             alt={service.title}
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
