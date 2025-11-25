export default function ContactSection() {
     return (
          <section className="w-full py-20 bg-gray-50" id="contact">
               <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Form */}
                    <div>
                         <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                              Get in Touch
                         </h2>
                         <p className="text-gray-600 mb-8">
                              Have a project in mind or need technical support?
                              Reach out to our team—we're here to help.
                         </p>

                         <form className="grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                              <div>
                                   <label className="text-sm font-medium text-gray-700">
                                        Full Name
                                   </label>
                                   <input
                                        type="text"
                                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter your name"
                                   />
                              </div>

                              <div>
                                   <label className="text-sm font-medium text-gray-700">
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                        placeholder="Enter your email"
                                   />
                              </div>

                              <div>
                                   <label className="text-sm font-medium text-gray-700">
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
                                   className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                              >
                                   Send Message
                              </button>
                         </form>
                    </div>

                    {/* Right: Map + Contact Info */}
                    <div className="space-y-8">
                         <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                   Our Location
                              </h3>
                              <div className="w-full h-72 rounded-xl overflow-hidden shadow border border-gray-200">
                                   {/* Google Maps iframe placeholder */}
                                   <iframe
                                        title="Company Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094746!2d144.95373631531696!3d-37.81627974201108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c2b47f8cc5c!2sTech%20Company!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                   ></iframe>
                              </div>
                         </div>

                         <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                   Contact Details
                              </h3>
                              <ul className="space-y-3 text-gray-700">
                                   <li>
                                        <strong>Address:</strong> 123 Tech
                                        Street, Innovation City, USA
                                   </li>
                                   <li>
                                        <strong>Email:</strong>{" "}
                                        contact@yourcompany.com
                                   </li>
                                   <li>
                                        <strong>Phone:</strong> +1 (555)
                                        123-4567
                                   </li>
                                   <li>
                                        <strong>Working Hours:</strong> Mon-Fri,
                                        9:00 AM - 6:00 PM
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </section>
     );
}
