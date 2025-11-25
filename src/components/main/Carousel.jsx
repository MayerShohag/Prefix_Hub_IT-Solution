import { useState, useEffect } from "react";
import { Link } from "react-router";
const slides = [
     {
          id: 1,
          title: "An Innovative IT Solutions Agency",
          subtitle: "Transforming your business with cutting-edge technology.",
          buttonText: "Learn More",
          buttonLink: "/services",
          image: "carousel-1.jpg",
     },
     {
          id: 2,
          title: "Secure & Reliable",
          subtitle: "We ensure your digital assets are protected 24/7.",
          buttonText: "Our Services",
          buttonLink: "#services",
          image: "carousel-2.jpg",
     },
     {
          id: 3,
          title: "Expert IT Consulting",
          subtitle: "Guiding your business with expert technology advice.",
          buttonText: "Contact Us",
          buttonLink: "#contact",
          image: "carousel-3.jpg",
     },
];

export default function Carousel() {
     const [currentSlide, setCurrentSlide] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentSlide((prev) => (prev + 1) % slides.length);
          }, 5000);
          return () => clearInterval(interval);
     }, []);

     const prevSlide = () => {
          setCurrentSlide((prev) =>
               prev === 0 ? slides.length - 1 : prev - 1
          );
     };

     const nextSlide = () => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
     };

     return (
          <section className="relative w-full md:h-[600px] h-[300px] overflow-hidden group">
               {slides.map((slide, index) => (
                    <div
                         className={`absolute inset-0 transition-opacity duration-1000 ${
                              index === currentSlide
                                   ? "opacity-100 z-10 pointer-events-auto"
                                   : "opacity-0 z-0 pointer-events-none"
                         }`}
                    >
                         <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-cover group-hover:brightness-40 brightness-75 duration-200"
                         />
                         <div className="">
                              <div className="absolute top-1/3 text-white w-full">
                                   <div className="flex flex-col items-center">
                                        <h1 className="md:text-4xl lg:text-6xl text-2xl font-bold mb-2 md:mb-4">
                                             {slide.title}
                                        </h1>
                                        <p className="mb-6 text-center px-20 lg:text-3xl">
                                             {slide.subtitle}
                                        </p>
                                        <Link
                                             to={slide.buttonLink}
                                             className="md:px-6 px-3 py-2 md:py-3 bg-accent/50 hover:bg-[#da3343] rounded text-white font-semibold"
                                        >
                                             {slide.buttonText}
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               ))}

               <button
                    onClick={prevSlide}
                    className="absolute top-1/2  transform -translate-y-1/2 bg-accent duration-200 text-white p-2 md:px-8 px-3 rounded-r-full hover:bg-[#DA3343] cursor-pointer z-20"
               >
                    &#10094;
               </button>
               <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-accent text-white p-2 md:px-8 px-3 rounded-l-full hover:bg-[#DA3343] duration-200 cursor-pointer z-20"
               >
                    &#10095;
               </button>
          </section>
     );
}
