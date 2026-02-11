const Industries = () => {
     const industriesWeServe = [
          {
               id: 1,
               title: "ISP & Telecom Providers",
               list: [
                    "Networking",
                    "MikroTik",
                    "Routing",
                    "Switching",
                    "Bandwidth Monitoring",
               ],
          },
          {
               id: 2,
               title: "Corporate & Offices",
               list: [
                    "IT Infrastructure",
                    "Network",
                    "Servers",
                    "Cloud Services",
               ],
          },
          {
               id: 3,
               title: "Healthcare & Clinics",
               list: [
                    "EMR Software",
                    "Patient Data Security",
                    "Website",
                    "Appointment Systems",
               ],
          },
          {
               id: 4,
               title: "Hospitality / Hotels / Restaurants",
               list: ["POS Systems", "Wi-Fi", "Website", "Digital Marketing"],
          },
          {
               id: 5,
               title: "Training & Educational",
               list: [
                    "Labs Setup & Maintenance",
                    "Computer & Networking Training",
                    "LMS Support",
               ],
          },
          {
               id: 6,
               title: "E-commerce & Retail",
               list: [
                    "Online Stores",
                    "Website Management",
                    "SEO",
                    "Marketing",
               ],
          },
          {
               id: 7,
               title: "SMEs & Startups",
               list: [
                    "IT Setup",
                    "Web & App Development",
                    "Cloud Services",
                    "Digital Marketing",
               ],
          },
          {
               id: 8,
               title: "Government / Public Sector",
               list: [
                    "IT Infrastructure",
                    "Servers",
                    "Cybersecurity",
                    "E-services",
               ],
          },
          {
               id: 9,
               title: "Finance & Banking",
               list: [
                    "Core Banking Software",
                    "Network Security",
                    "Compliance Systems",
               ],
          },
          {
               id: 10,
               title: "Manufacturing & Industrial Units",
               list: ["Factory IT Setup", "Automation Systems", "Networking"],
          },
          {
               id: 11,
               title: "Media & Entertainment",
               list: [
                    "Website",
                    "Digital Content",
                    "Video Streaming",
                    "Cloud Storage",
               ],
          },
          {
               id: 12,
               title: "Real Estate & Property Management",
               list: ["CRM", "Website", "Cloud-based Management Tools"],
          },
          {
               id: 13,
               title: "NGOs & Non-profits",
               list: [
                    "Website",
                    "Cloud",
                    "IT Infrastructure",
                    "Online Fundraising Platforms",
               ],
          },
     ];

     return (
          <section className="bg-gray-50 min-h-screen py-16">
               <div className="text-center mb-14">
                    <h2 className="text-[40px] lg:text-6xl font-semibold text-[#005461] mb-3">
                         Industries We Serve
                    </h2>
                    <p className="text-gray-600 max-w-2xl px-5 mx-auto">
                         We provide specialized IT, networking, and digital
                         solutions tailored for a wide range of industries,
                         including ISPs, telecom providers, corporate offices,
                         and businesses of all sizes.
                    </p>
               </div>

               <div className="grid grid-cols-1 max-w-6xl mx-auto mb-20 lg:grid-cols-3 gap-5 border border-black/20 p-5 rounded-2xl bg-black/5">
                    {industriesWeServe.map((industries) => (
                         <div
                              key={industries.id}
                              className="flex flex-col gap-1"
                         >
                              <h1 className="text-2xl font-medium">
                                   {industries.title}
                              </h1>
                              <div className="pl-5">
                                   {industries.list.map(
                                        (industriesItem, idx) => (
                                             <li className="list-disc">
                                                  <a
                                                       href="#"
                                                       className="flex flex-col w-fit hover:underline"
                                                       key={idx}
                                                  >
                                                       {industriesItem}
                                                  </a>
                                             </li>
                                        )
                                   )}
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Industries;
