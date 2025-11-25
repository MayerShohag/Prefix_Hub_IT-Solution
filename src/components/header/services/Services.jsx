export default function Services() {
     return (
          <section className="w-full bg-gray-50 py-16">
               <div className="max-w-6xl mx-auto px-4">
                    {/* Section 1: Header */}
                    <div className="text-center mb-16">
                         <h2 className="text-4xl font-bold mb-4">
                              Our IT Services
                         </h2>
                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                              We provide modern, scalable and efficient IT
                              solutions to help your business grow.
                         </p>
                    </div>

                    {/* Section 2: Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                              <h3 className="text-2xl font-semibold mb-2">
                                   Web Development
                              </h3>
                              <p className="text-gray-600">
                                   Custom websites, web apps, dashboards and
                                   enterprise solutions.
                              </p>
                         </div>

                         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                              <h3 className="text-2xl font-semibold mb-2">
                                   Mobile App Development
                              </h3>
                              <p className="text-gray-600">
                                   Android, iOS এবং cross-platform mobile
                                   application development.
                              </p>
                         </div>

                         <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                              <h3 className="text-2xl font-semibold mb-2">
                                   Cloud Solutions
                              </h3>
                              <p className="text-gray-600">
                                   AWS, Azure, GCP cloud infrastructure setup
                                   and optimization.
                              </p>
                         </div>
                    </div>

                    {/* Section 3: Why Choose Us */}
                    <div className="bg-white p-10 rounded-2xl shadow-md mb-16">
                         <h3 className="text-3xl font-semibold mb-4 text-center">
                              Why Choose Us?
                         </h3>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                              <li>✔ Experienced and certified professionals</li>
                              <li>✔ Modern tech stack & latest tools</li>
                              <li>✔ Scalable and secure infrastructure</li>
                              <li>✔ Customer-driven development process</li>
                         </ul>
                    </div>

                    {/* Section 4: Process Steps */}
                    <div className="mb-16">
                         <h3 className="text-3xl font-semibold text-center mb-8">
                              Our Working Process
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                              {[
                                   "Planning",
                                   "Design",
                                   "Development",
                                   "Deployment",
                              ].map((step, i) => (
                                   <div
                                        key={i}
                                        className="bg-white shadow rounded-2xl p-6 text-center"
                                   >
                                        <div className="text-4xl font-bold text-blue-600 mb-2">
                                             {i + 1}
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2">
                                             {step}
                                        </h4>
                                        <p className="text-gray-600">
                                             We follow a clean and structured
                                             workflow for better results.
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>

                    {/* Section 5: CTA */}
                    <div className="text-center bg-blue-600 text-white p-10 rounded-2xl shadow-md">
                         <h3 className="text-3xl font-semibold mb-4">
                              Ready to Start Your Project?
                         </h3>
                         <p className="mb-6 text-lg">
                              Let’s build something great together.
                         </p>
                         <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-200 transition">
                              Contact Us
                         </button>
                    </div>
               </div>
          </section>
     );
}
