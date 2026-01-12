const team = [
     {
          id: "ID-PHS1234",
          name: "Shovon Biswas",
          role: "Founder & CEO",
          img: "Team Member/shovon.png",
          socials: {
               linkedin: "#",
               github: "#",
          },
          experties: "IT Networking & System , Server & Hosting Specialist",
          phone: "+8801571259365",
     },
     {
          id: "ID-PHS9090",
          name: "MD Mubin Muktadir",
          role: "Managing Director",
          img: "Team Member/mubin.png",
          socials: {
               linkedin: "#",
               dribbble: "#",
          },
          experties: "",
          phone: "+8801613636069",
     },
     {
          id: "ID-PHS4200",
          name: "Avijit Roy",
          role: "Director & HR-Admin",
          img: "Team Member/avijit.jpeg",
          socials: {
               linkedin: "#",
               github: "#",
          },
          experties: "IT System Support Specialist & Marketing",
          phone: "+8801720580133",
     },
     {
          id: "ID-PHS1969",
          name: "Ashis Kumar Biswas",
          role: "Director & CTO",
          img: "Team Member/Ashis.jpg",
          socials: {
               linkedin: "#",
               twitter: "#",
          },
          experties:
               "System Admin & Network Specialist ( MikroTik , Cisco , Switch )",
          phone: "+8801645-531257",
     },
     {
          id: "ID-PHS6502",
          name: "Md Tanvir Hossain",
          role: "General Manger",
          img: "Team Member/tanvir(1).jpg",
          socials: {
               linkedin: "#",
               twitter: "#",
          },
          experties: "IT Support Services & Networking Specialist",
          phone: "+8801608399567",
     },
     {
          id: "ID-PHS0001",
          name: "Shohag Kumar",
          role: "Web Developer (MERN)",
          img: "Team Member/shohag.jpg",
          socials: {
               linkedin: "#",
               twitter: "#",
          },
          experties: "Web Design & Development",
          phone: "+8801722656698",
     },
];

export default function TeamMembersSection() {
     return (
          <section className="w-full py-20 bg-white">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-14">
                         <h2 className="text-3xl lg:text-6xl font-semibold text-[#005461] mb-3">
                              Meet Our Team
                         </h2>
                         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                              Our team consists of skilled engineers, designers,
                              and IT experts dedicated to delivering top-tier
                              technology solutions.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                         {team.map((member, idx) => (
                              <div
                                   key={idx}
                                   className="bg-[#018790] rounded-2xl shadow-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                              >
                                   <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto object-cover mb-5 shadow"
                                   />
                                   <h3 className="text-xl text-white font-medium">
                                        {member.name}
                                   </h3>
                                   <p className="text-white/80 text-sm font-light mb-4">
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
