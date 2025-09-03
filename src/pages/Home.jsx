import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-12 text-center">
     
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">Cutting Energy Costs</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">Safe for You, Safe for the Earth!</p>
        <a href="#plans" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">Choose Your Plan</a>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Our Solar Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Business Solar Packages */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Business Solar Packages</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Cost savings with fast ROI</li>
              <li>Scalable systems for growth</li>
              <li>Enhanced sustainability</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
          </div>
          {/* Residential Solution */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Residential Solution</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Easy installation and financing</li>
              <li>Increases property value</li>
              <li>Real-time energy monitoring</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
          </div>
          {/* Farm Solar Systems */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Farm Solar Systems</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Reduces energy costs</li>
              <li>Customized for farming needs</li>
              <li>Access to government incentives</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
          </div>
          {/* Commercial Scale Solar Solutions */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Commercial Scale Solar Solutions</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>High energy production efficiency</li>
              <li>Customizable design</li>
              <li>Long-term maintenance support</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
           
          </div>
          
          {/* Solar Equipment Solutions */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Solar Equipment Solutions</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>High-efficiency products</li>
              <li>Expert consultation</li>
              <li>Warranty and support included</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
          </div>
          {/* Solar Maintenance & Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-start">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Solar Maintenance & Support</h3>
            <ul className="text-gray-700 mb-4 list-disc list-inside">
              <li>Regular inspections</li>
              <li>Performance monitoring</li>
              <li>Rapid issue resolution</li>
            </ul>
            <a href="#" className="text-blue-600 font-semibold hover:underline mt-auto">See Details</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            We are dedicated to providing sustainable and efficient solar energy solutions for homes, businesses, and industries. Our mission is to create a cleaner future by harnessing the power of the sun. Our team is committed to offering eco-friendly energy solutions with cutting-edge technology, ensuring a greener and more sustainable planet for generations to come.
          </p>
          <Link to="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Know More About Us</Link>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Mission and Vision</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is to revolutionize the solar energy industry by providing innovative, sustainable, and accessible solutions that contribute to a cleaner and brighter future for all. We are dedicated to empowering individuals, businesses, and communities to harness the power of the sun, fostering resilience and promoting sustainable development.
          </p>
          <p className="text-lg text-gray-700">
            Our vision is to be a global leader in renewable energy solutions, transforming the way the world produces and consumes energy. We envision a future where solar energy is at the heart of every community, powering a healthier planet for generations to come. With integrity, expertise, and a commitment to excellence, we are making solar energy the preferred choice for a sustainable world.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Innovative Solutions</h3>
              <p className="text-gray-700">We provide cutting-edge solar energy solutions tailored to your specific needs, ensuring efficiency and reliability.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Affordable Pricing</h3>
              <p className="text-gray-700">Our solutions are designed to be cost-effective, providing long-term savings and making solar power accessible to all.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Expertise & Experience</h3>
              <p className="text-gray-700">With years of experience in the industry, our team is equipped to handle any solar project, big or small, with precision.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Trusted & Reliable</h3>
              <p className="text-gray-700">Our commitment to quality and customer satisfaction ensures that you can trust us for all your solar energy needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Achievements</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <span className="text-5xl font-extrabold text-green-700">5+</span>
              <p className="text-lg text-gray-700 mt-2">Years of Experience</p>
            </div>
            <div>
              <span className="text-5xl font-extrabold text-green-700">450+</span>
              <p className="text-lg text-gray-700 mt-2">Happy Clients</p>
            </div>
            <div>
              <span className="text-5xl font-extrabold text-green-700">700+</span>
              <p className="text-lg text-gray-700 mt-2">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 shadow">
              <p className="italic text-gray-700 mb-4">“Top-notch service and incredible support throughout the entire installation.The team was knowledgeable, attentive, and ensured every step was smooth and efficient.”</p>
              <p className="font-semibold text-green-700">Waqas Ali</p>
              <p className="text-gray-600">Homeowner</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow">
              <p className="italic text-gray-700 mb-4">“Mi Solar Energy Solution's team went above and beyond in providing us with a tailored solar solution. Their support has been exceptional, and our energy bills have significantly dropped!”</p>
              <p className="font-semibold text-green-700">Dilfraz Rathore</p>
              <p className="text-gray-600">Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Ready to Go Solar?</h2>
        <p className="text-lg text-gray-700 mb-6">Start your journey towards energy independence and sustainability today!</p>
        <a href="#plans" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">Get a Free Quote</a>
      </section>
    </div>
  );
};

export default Home;
