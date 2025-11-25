const team = [
     {
          name: "Avijit Roy",
          role: "Senior IT Expert",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/485146680_1644479512858843_236141999716689204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBZei4uvNVIaFBFuf8Z5jE3vBXsCoY9Uje8FewKhj1SMNVe2vBVCWMRPT2BtWxk8Z9XPC8eaGZcd1nd8o7BSQk&_nc_ohc=h9mE8akfceIQ7kNvwHg0qnG&_nc_oc=AdlSJ_x019--iZglIh5PSDuKVntjOn8M9jVsmiLfF3_qO6csfNGlqu5kgF0JqjKilgU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=_oNxfl39XubqRSJTb1sGyw&oh=00_AfikLW1MHeFMkW1KpRNeeee5j53-ZbyvLFGpWaJclrsxKA&oe=692B1A2D",
          socials: {
               linkedin: "#",
               github: "#",
          },
     },
     {
          name: "Shovon Biswas",
          role: "UI/UX Designer",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/483099375_668761252270367_6631906080357030641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHGfusrjULUvD2sUc51yxs_dMkob2WWPgJ0yShvZZY-AlAEHcEagxjQRdH4305wNBV783tlUNT7COfGepXMLwnA&_nc_ohc=H1CvvUgzgXYQ7kNvwEiXWfX&_nc_oc=Adlz0GIFF2yd089SbBqXcwgvb5OHCxdKspkBRKGhfalEcTf1niXzdZjW_gyvlJ5uOT8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=uOU73VMxPt18qRq8xD-mQg&oh=00_Afig84v5htKuME-PGKJCl6vqGHZ1-ffMpIrPOnlZKGQ5eQ&oe=692B2E49",
          socials: {
               linkedin: "#",
               dribbble: "#",
          },
     },
     {
          name: "Montu Roy",
          role: "Cloud & DevOps Engineer",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/485146680_1644479512858843_236141999716689204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBZei4uvNVIaFBFuf8Z5jE3vBXsCoY9Uje8FewKhj1SMNVe2vBVCWMRPT2BtWxk8Z9XPC8eaGZcd1nd8o7BSQk&_nc_ohc=h9mE8akfceIQ7kNvwHg0qnG&_nc_oc=AdlSJ_x019--iZglIh5PSDuKVntjOn8M9jVsmiLfF3_qO6csfNGlqu5kgF0JqjKilgU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=_oNxfl39XubqRSJTb1sGyw&oh=00_AfikLW1MHeFMkW1KpRNeeee5j53-ZbyvLFGpWaJclrsxKA&oe=692B1A2D",
          socials: {
               linkedin: "#",
               github: "#",
          },
     },
     {
          name: "Sophia Patel",
          role: "Cybersecurity Analyst",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/483099375_668761252270367_6631906080357030641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHGfusrjULUvD2sUc51yxs_dMkob2WWPgJ0yShvZZY-AlAEHcEagxjQRdH4305wNBV783tlUNT7COfGepXMLwnA&_nc_ohc=H1CvvUgzgXYQ7kNvwEiXWfX&_nc_oc=Adlz0GIFF2yd089SbBqXcwgvb5OHCxdKspkBRKGhfalEcTf1niXzdZjW_gyvlJ5uOT8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=uOU73VMxPt18qRq8xD-mQg&oh=00_Afig84v5htKuME-PGKJCl6vqGHZ1-ffMpIrPOnlZKGQ5eQ&oe=692B2E49",
          socials: {
               linkedin: "#",
               twitter: "#",
          },
     },
];

export default function TeamMembersSection() {
     return (
          <section className="w-full py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                              Meet Our Team
                         </h2>
                         <p className="text-gray-600 max-w-2xl mx-auto">
                              Our team consists of skilled engineers, designers,
                              and IT experts dedicated to delivering top-tier
                              technology solutions.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                         {team.map((member, idx) => (
                              <div
                                   key={idx}
                                   className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                   <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover mb-5 shadow"
                                   />
                                   <h3 className="text-xl font-semibold text-gray-900">
                                        {member.name}
                                   </h3>
                                   <p className="text-indigo-600 text-sm font-medium mb-4">
                                        {member.role}
                                   </p>

                                   <div className="flex justify-center gap-4 mt-3 text-gray-600">
                                        {member.socials.linkedin && (
                                             <a
                                                  href={member.socials.linkedin}
                                                  className="hover:text-indigo-600 transition"
                                             >
                                                  <i className="fab fa-linkedin text-xl"></i>
                                             </a>
                                        )}
                                        {member.socials.github && (
                                             <a
                                                  href={member.socials.github}
                                                  className="hover:text-indigo-600 transition"
                                             >
                                                  <i className="fab fa-github text-xl"></i>
                                             </a>
                                        )}
                                        {member.socials.dribbble && (
                                             <a
                                                  href={member.socials.dribbble}
                                                  className="hover:text-indigo-600 transition"
                                             >
                                                  <i className="fab fa-dribbble text-xl"></i>
                                             </a>
                                        )}
                                        {member.socials.twitter && (
                                             <a
                                                  href={member.socials.twitter}
                                                  className="hover:text-indigo-600 transition"
                                             >
                                                  <i className="fab fa-twitter text-xl"></i>
                                             </a>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
