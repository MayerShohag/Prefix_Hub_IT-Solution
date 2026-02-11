export default function ContactSection() {
     const address = {
          location: "Level-4 House 81 Road 17 Sector 11, Uttara, Dhaka-1230",
          mail: "prefixhubsolution@gmail.com",
          phone: "+8801518934337",
          open: "24/7",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3860588240764!2d90.3855494!3d23.8759253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c500701f0839%3A0x406dfef2818bd835!2sPrefixHub%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1770790518727!5m2!1sen!2sbd",
     };
     return (
          <section className="w-full py-20 bg-gray-50" id="contact">
               <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                         <h2 className="text-3xl lg:text-6xl font-semibold text-[#018790] mb-6">
                              Get in Touch
                         </h2>
                         <p className="text-gray-600 text-lg font-light mb-8">
                              Have a project in mind or need technical support?
                              Reach out to our team—we're here to help.
                         </p>

                         <form className="grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-300">
                              <div>
                                   <label className="text-lg font-medium text-gray-700">
                                        Full Name
                                   </label>
                                   <input
                                        type="text"
                                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter your name"
                                   />
                              </div>

                              <div>
                                   <label className="text-lg font-medium text-gray-700">
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter your email"
                                   />
                              </div>

                              <div>
                                   <label className="text-lg font-medium text-gray-700">
                                        Message
                                   </label>
                                   <textarea
                                        rows="5"
                                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Tell us how we can help you"
                                   ></textarea>
                              </div>

                              <button
                                   type="submit"
                                   className="w-full cursor-pointer py-3 rounded-lg bg-[#018790] text-white font-semibold hover:bg-[#018790]/90 duration-300 transition"
                              >
                                   Send Message
                              </button>
                         </form>
                    </div>

                    <div className="space-y-8">
                         <div>
                              <h3 className="text-4xl font-semibold text-[#018790] mb-4">
                                   Our Location
                              </h3>
                              <div className="w-full h-72 rounded-xl overflow-hidden shadow border border-gray-200">
                                   <iframe
                                        src={address.map}
                                        className="w-full h-full"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"
                                   ></iframe>
                              </div>
                         </div>

                         <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-300">
                              <h3 className="text-[40px] font-semibold text-gray-900 mb-4">
                                   Contact Details
                              </h3>
                              <ul className="space-y-3 text-wrap text-gray-700">
                                   <li>
                                        <strong>Address:</strong>{" "}
                                        {address.location}
                                   </li>
                                   <li>
                                        <strong>Email:</strong>{" "}
                                        <a href={`mailto:${address.mail}`}>
                                             {address.mail}
                                        </a>
                                   </li>
                                   <li>
                                        <strong>Phone:</strong>
                                        <a href={`tel:+${address.phone}`}>
                                             {" "}
                                             +8801518-934337
                                        </a>
                                   </li>
                                   <li>
                                        <strong>Working Hours:</strong>{" "}
                                        {address.open}
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
