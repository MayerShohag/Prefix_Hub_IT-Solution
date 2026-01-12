import { useEffect, useState } from "react";

const Counter = ({ end }) => {
     const [value, setValue] = useState(0);

     useEffect(() => {
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
               const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
               );
               const currentValue = Math.floor(progress * end);
               setValue(currentValue);

               if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
     }, [end]);

     return <span>{value}</span>;
};

export default function SuccessSection() {
     const stats = [
          {
               number: 99,
               title: "Happy Clients",
               description: "Success in delivering satisfaction",
          },
          {
               number: 25,
               title: "Business Solutions",
               description: "Thousands of successful implementations",
          },
          {
               number: 120,
               title: "Active Clients",
               description: "Companies that trust our tech expertise",
          },
          {
               number: 5,
               title: "Star Ratings",
               description: "Reviews from satisfied partners",
          },
     ];

     return (
          <section className="w-full py-20">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-center text-3xl mb-5 lg:text-6xl font-semibold text-[#018790]">
                         Our Performance in Numbers
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                         We believe in transforming ideas into technology,
                         connecting businesses with innovation, and empowering
                         clients to succeed in a digital world.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-15 lg:grid-cols-4 gap-8">
                         {stats.map((item, index) => (
                              <div
                                   key={index}
                                   className="p-8 bg-[#018790] hover:scale-102 rounded-2xl text-white shadow-2xl transition-all duration-200 text-center"
                              >
                                   <p className="text-5xl font-extrabold mb-3">
                                        <Counter end={item.number} />
                                   </p>
                                   <h3 className="text-xl font-medium mb-1">
                                        {item.title}
                                   </h3>
                                   <p className="text-sm font-light">
                                        {item.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
