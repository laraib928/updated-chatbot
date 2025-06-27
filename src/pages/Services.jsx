const Services = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Business Solar Packages</h1>
        <p className="text-lg text-gray-700 mb-6">Maximize your business's energy efficiency with our customized solar solutions.</p>
        <a href="#quote" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">Get a Free Quote</a>
      </section>

      {/* Main Description */}
      <section className="max-w-3xl mx-auto text-center mb-16 px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Business Solar Solutions for a Sustainable Future</h2>
        <p className="text-gray-700 mb-4">
          Transitioning your business to solar energy isn't just a smart financial decision, it's a step towards a sustainable future. Our tailor-made solar solutions are designed to help businesses reduce energy costs, achieve faster ROI, and build a greener, more efficient future.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're in retail, manufacturing, or services, our scalable solar solutions are ideal for businesses of all sizes. By choosing solar, you're investing in long-term energy independence, reduced operational costs, and a cleaner environment.
        </p>
        <p className="text-gray-700 font-semibold">Start Your Solar Journey Today</p>
      </section>

      {/* Why Choose Our Solar Solutions */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h3 className="text-2xl font-bold text-green-700 text-center mb-8">Why Choose Our Solar Solutions?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center shadow">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Cost Savings</h4>
            <p className="text-gray-700">Reduce energy expenses with our high-efficiency solar systems designed to provide fast ROI.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center shadow">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Scalability for Growth</h4>
            <p className="text-gray-700">Our solutions grow with your business needs, providing flexibility as your energy demand increases.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center shadow">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Eco-Friendly & Sustainable</h4>
            <p className="text-gray-700">Contribute to a cleaner environment by using sustainable solar energy that reduces carbon emissions.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center shadow">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">Fast Return on Investment</h4>
            <p className="text-gray-700">Experience a swift return on investment, with our efficient solar solutions tailored for businesses.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-3xl mx-auto mb-16 px-4">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">Benefits of Business Solar Solutions!!</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
          <li>Achieve energy independence by generating your own power, reducing reliance on grid electricity.</li>
          <li>Fixed energy costs help you better manage and forecast operational expenses.</li>
          <li>Stand out as a socially responsible brand by adopting clean, sustainable energy solutions.</li>
          <li>Solar energy systems are a long-term investment that adds value to your business.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section id="quote" className="text-center py-8">
        <a href="#" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">Start Your Solar Journey Today</a>
      </section>
    </div>
  );
};

export default Services;
