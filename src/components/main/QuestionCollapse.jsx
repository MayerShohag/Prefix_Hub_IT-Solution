import { IoIosArrowDown } from "react-icons/io";

const QuestionCollapse = () => {
     return (
          <div className="container mx-auto lg:px-40 px-5 my-10">
               <h1 className="text-4xl font-bold text-center">
                    Frequently Asked Question
               </h1>
               <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-5">
                    <details className="collapse bg-gray-100 border-gray-300 border">
                         <summary className="collapse-title font-semibold flex items-center gap-2">
                              <span>
                                   Who photocopier service center in Bangladesh?
                              </span>
                              <IoIosArrowDown />
                         </summary>
                         <div className="collapse-content text-sm">
                              — The Best Place For Your Printer and Photocopier
                              repairing center in Bangladesh.
                         </div>
                    </details>
                    <details className="collapse bg-gray-100 border-gray-300 border">
                         <summary className="collapse-title font-semibold flex items-center gap-2">
                              <span>What is your service?</span>
                              <IoIosArrowDown />
                         </summary>
                         <div className="collapse-content text-sm">
                              — At Prefix Hub IT SOLUTION, we believe in
                              delivering quality printer repairs that stand the
                              test of time. Our commitment to excellence is
                              matched by our dedication to exceptional customer
                              service.
                         </div>
                    </details>
                    <details className="collapse bg-gray-100 border-gray-300 border">
                         <summary className="collapse-title font-semibold flex items-center gap-2">
                              <span>What Payment Methods Are Available?</span>
                              <IoIosArrowDown />
                         </summary>
                         <div className="collapse-content text-sm">
                              — With any financial product that you buy, it is
                              important that you know you are getting the best
                              advice from a reputable company as oftenClick the
                              "Sign Up" button in the top right corner and
                              follow the registration process.
                         </div>
                    </details>
                    <details className="collapse bg-gray-100 border-gray-300 border">
                         <summary className="collapse-title font-semibold flex items-center gap-2">
                              <span>
                                   If I have questions, where can I find
                                   answers?
                              </span>
                              <IoIosArrowDown />
                         </summary>
                         <div className="collapse-content text-sm">
                              — With any financial product that you buy, it is
                              important that you know you are getting the best
                              advice from a reputable company as often.
                         </div>
                    </details>
               </div>
          </div>
     );
};

export default QuestionCollapse;
