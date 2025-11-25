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
          <section className="w-full py-16 bg-linear-to-b from-gray-50 to-gray-100">
               <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
                         Our Performance in Numbers
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                         {stats.map((item, index) => (
                              <div
                                   key={index}
                                   className="p-8 bg-white hover:bg-accent rounded-2xl hover:text-white text-blue-950 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 text-center"
                              >
                                   <p className="text-5xl font-extrabold mb-3">
                                        <Counter end={item.number} />
                                   </p>
                                   <h3 className="text-lg font-semibold mb-1">
                                        {item.title}
                                   </h3>
                                   <p className="text-sm ">
                                        {item.description}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}
