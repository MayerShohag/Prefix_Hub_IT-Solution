const initialImages = [
     {
          id: 1,
          name: "Shovon Biswas",
          role: "UI/UX Designer",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/483099375_668761252270367_6631906080357030641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHGfusrjULUvD2sUc51yxs_dMkob2WWPgJ0yShvZZY-AlAEHcEagxjQRdH4305wNBV783tlUNT7COfGepXMLwnA&_nc_ohc=H1CvvUgzgXYQ7kNvwEiXWfX&_nc_oc=Adlz0GIFF2yd089SbBqXcwgvb5OHCxdKspkBRKGhfalEcTf1niXzdZjW_gyvlJ5uOT8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=uOU73VMxPt18qRq8xD-mQg&oh=00_Afig84v5htKuME-PGKJCl6vqGHZ1-ffMpIrPOnlZKGQ5eQ&oe=692B2E49",
     },
     {
          id: 2,
          name: "Avijit Roy",
          role: "Senior IT Expert",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/485146680_1644479512858843_236141999716689204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBZei4uvNVIaFBFuf8Z5jE3vBXsCoY9Uje8FewKhj1SMNVe2vBVCWMRPT2BtWxk8Z9XPC8eaGZcd1nd8o7BSQk&_nc_ohc=h9mE8akfceIQ7kNvwHg0qnG&_nc_oc=AdlSJ_x019--iZglIh5PSDuKVntjOn8M9jVsmiLfF3_qO6csfNGlqu5kgF0JqjKilgU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=_oNxfl39XubqRSJTb1sGyw&oh=00_AfikLW1MHeFMkW1KpRNeeee5j53-ZbyvLFGpWaJclrsxKA&oe=692B1A2D",
     },
     {
          id: 3,
          name: "Shovon Biswas",
          role: "UI/UX Designer",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/483099375_668761252270367_6631906080357030641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHGfusrjULUvD2sUc51yxs_dMkob2WWPgJ0yShvZZY-AlAEHcEagxjQRdH4305wNBV783tlUNT7COfGepXMLwnA&_nc_ohc=H1CvvUgzgXYQ7kNvwEiXWfX&_nc_oc=Adlz0GIFF2yd089SbBqXcwgvb5OHCxdKspkBRKGhfalEcTf1niXzdZjW_gyvlJ5uOT8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=uOU73VMxPt18qRq8xD-mQg&oh=00_Afig84v5htKuME-PGKJCl6vqGHZ1-ffMpIrPOnlZKGQ5eQ&oe=692B2E49",
     },
     {
          id: 4,
          name: "Avijit Roy",
          role: "Senior IT Expert",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/485146680_1644479512858843_236141999716689204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBZei4uvNVIaFBFuf8Z5jE3vBXsCoY9Uje8FewKhj1SMNVe2vBVCWMRPT2BtWxk8Z9XPC8eaGZcd1nd8o7BSQk&_nc_ohc=h9mE8akfceIQ7kNvwHg0qnG&_nc_oc=AdlSJ_x019--iZglIh5PSDuKVntjOn8M9jVsmiLfF3_qO6csfNGlqu5kgF0JqjKilgU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=_oNxfl39XubqRSJTb1sGyw&oh=00_AfikLW1MHeFMkW1KpRNeeee5j53-ZbyvLFGpWaJclrsxKA&oe=692B1A2D",
     },
     {
          id: 5,
          name: "Shovon Biswas",
          role: "UI/UX Designer",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/483099375_668761252270367_6631906080357030641_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHGfusrjULUvD2sUc51yxs_dMkob2WWPgJ0yShvZZY-AlAEHcEagxjQRdH4305wNBV783tlUNT7COfGepXMLwnA&_nc_ohc=H1CvvUgzgXYQ7kNvwEiXWfX&_nc_oc=Adlz0GIFF2yd089SbBqXcwgvb5OHCxdKspkBRKGhfalEcTf1niXzdZjW_gyvlJ5uOT8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=uOU73VMxPt18qRq8xD-mQg&oh=00_Afig84v5htKuME-PGKJCl6vqGHZ1-ffMpIrPOnlZKGQ5eQ&oe=692B2E49",
     },
     {
          id: 6,
          name: "Avijit Roy",
          role: "Senior IT Expert",
          img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/485146680_1644479512858843_236141999716689204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHBZei4uvNVIaFBFuf8Z5jE3vBXsCoY9Uje8FewKhj1SMNVe2vBVCWMRPT2BtWxk8Z9XPC8eaGZcd1nd8o7BSQk&_nc_ohc=h9mE8akfceIQ7kNvwHg0qnG&_nc_oc=AdlSJ_x019--iZglIh5PSDuKVntjOn8M9jVsmiLfF3_qO6csfNGlqu5kgF0JqjKilgU&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=_oNxfl39XubqRSJTb1sGyw&oh=00_AfikLW1MHeFMkW1KpRNeeee5j53-ZbyvLFGpWaJclrsxKA&oe=692B1A2D",
     },
];

const allImages = [...initialImages, ...initialImages];

const TeamCard = ({ image }) => {
     return (
          <div className="shrink-0 w-80 h-auto p-4 pb-15 mx-auto md:w-[24rem]">
               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 -rotate-2 hover:rotate-0 focus-within:rotate-0 transition duration-300">
                    <img
                         src={image.img}
                         alt={image.id}
                         className="w-full h-70 object-cover rounded-t-xl "
                    />
                    <div className="p-4 text-center">
                         <p className="font-bold text-xl text-gray-800">
                              {image.name}
                         </p>
                         <p className="font-medium text-lg text-gray-800">
                              {image.role}
                         </p>
                    </div>
               </div>
          </div>
     );
};

const TeamSection = () => {
     const scrollDistance = `-${initialImages.length * 20}rem`;

     return (
          <div className="min-h-screen bg-gray-50 flex items-start pt-16 justify-center font-sans">
               <style>
                    {`
          @keyframes infiniteScroll {
            from {
              transform: translateX(0); 
            }
            to {
              transform: translateX(var(--scroll-distance));
            }
          }
          
          .scroll-content {
            --scroll-distance: ${scrollDistance};
          }
          
          .animate-infinite-scroll {
            animation: infiniteScroll 60s linear infinite; 
          }
        `}
               </style>
               <div className="w-full">
                    <header className="text-center mb-12">
                         <h1 className="lg:text-5xl text-3xl font-extrabold text-gray-900 tracking-tight">
                              Meet Our Team Members
                         </h1>
                         <p className="mt-3 md:text-xl text-sm px-5 text-gray-600 max-w-3xl mx-auto">
                              Our team consists of skilled engineers, designers,
                              and IT experts dedicated to delivering top-tier
                              technology solutions.
                         </p>
                    </header>

                    <div className="scroll-container overflow-hidden w-full relative group">
                         <div
                              className="scroll-content flex min-w-max animate-infinite-scroll"
                              onMouseEnter={(e) =>
                                   (e.currentTarget.style.animationPlayState =
                                        "paused")
                              }
                              onMouseLeave={(e) =>
                                   (e.currentTarget.style.animationPlayState =
                                        "running")
                              }
                         >
                              {allImages.map((image, index) => (
                                   <TeamCard key={index} image={image} />
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default TeamSection;
