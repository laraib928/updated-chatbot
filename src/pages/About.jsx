const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-green-700 mb-2">Empowering a Sustainable Future Together</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Driven by Innovation, Guided by Integrity</h2>

      {/* About Us Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">About Us</h3>
        <p className="text-gray-700 mb-2">
          At Mi Solar Energy Solution, we are committed to providing innovative solar technology and services that empower a brighter, cleaner future. Our team works tirelessly to make solar power accessible and efficient for all, guided by integrity and expertise. We aim to deliver sustainable energy solutions that not only meet the needs of communities and businesses worldwide but also contribute to a greener planet.
        </p>
        <p className="text-gray-700 mb-2">
          We believe that every step towards clean energy brings us closer to a healthier environment. By offering affordable and efficient solar solutions, we help individuals and businesses make sustainable choices. Our mission extends beyond just technology; it's about fostering resilience and creating a lasting positive impact within the communities we serve. Together, we're not just building solutions — we're paving the way for a brighter, greener future for generations to come.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Why Choose Us</h3>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li><span className="font-semibold">Innovative Solutions:</span> We provide cutting-edge solar energy solutions tailored to your specific needs, ensuring efficiency and reliability.</li>
          <li><span className="font-semibold">Affordable Pricing:</span> Our solutions are designed to be cost-effective, providing long-term savings and making solar power accessible to all.</li>
          <li><span className="font-semibold">Expertise & Experience:</span> With years of experience in the industry, our team is equipped to handle any solar project, big or small, with precision.</li>
          <li><span className="font-semibold">Trusted & Reliable:</span> Our commitment to quality and customer satisfaction ensures that you can trust us for all your solar energy needs.</li>
        </ul>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Mission and Vision</h3>
        <p className="text-gray-700 mb-2">
          Our mission is to revolutionize the solar energy industry by providing innovative, sustainable, and accessible solutions that contribute to a cleaner and brighter future for all. We are dedicated to empowering individuals, businesses, and communities to harness the power of the sun, fostering resilience and promoting sustainable development.
        </p>
        <p className="text-gray-700 mb-2">
          Our vision is to be a global leader in renewable energy solutions, transforming the way the world produces and consumes energy. We envision a future where solar energy is at the heart of every community, powering a healthier planet for generations to come. With integrity, expertise, and a commitment to excellence, we are making solar energy the preferred choice for a sustainable world.
        </p>
      </section>

      {/* Success Stories Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Success Stories</h3>
        <div className="mb-4">
          <h4 className="font-semibold text-green-700">Project Alpha</h4>
          <p className="text-gray-700">Successfully installed solar panels for a commercial building, reducing energy costs by 40% and promoting sustainable business practices.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-green-700">Green Agriculture</h4>
          <p className="text-gray-700">Provided solar solutions for an agricultural farm, enhancing productivity while cutting carbon emissions by 50%.</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-green-700">Residential Solar</h4>
          <p className="text-gray-700">Installed home solar systems for 50+ households, saving them an average of 30% on monthly energy bills and promoting green living.</p>
        </div>
        <button className="text-blue-600 underline mb-6">See More</button>
      </section>

      {/* Testimonials Section */}
      <section className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Testimonials</h3>
        <div className="mb-4">
          <p className="italic text-gray-700">"Top-notch service and incredible support throughout the entire installation. The team was knowledgeable, attentive, and ensured every step was smooth and efficient."</p>
          <p className="font-semibold text-gray-800 mt-1">Waqas Ali</p>
          <p className="text-gray-600">Homeowner</p>
        </div>
        <div className="mb-4">
          <p className="italic text-gray-700">"Mi Solar Energy Solution's team went above and beyond in providing us with a tailored solar solution. Their support has been exceptional, and our energy bills have significantly dropped!"</p>
          <p className="font-semibold text-gray-800 mt-1">Dilfraz Rathore</p>
          <p className="text-gray-600">Business Owner</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-10">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Ready to Go Solar?</h3>
        <p className="text-gray-700 mb-6">Start your journey towards energy independence and sustainability today!</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">Get a Free Quote</button>
      </section>
    </div>
  );
};

export default About;
