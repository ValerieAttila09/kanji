import React from 'react';

const JoinUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 mb-16">
          Explore Careers
        </button>

        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
        <p className="text-gray-600 mb-8">Meet the Innovators Guiding the Mission</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto text-gray-700">
          <span>John Doe</span>
          <span>Jane Doe</span>
          <span>John Smith</span>
          <span>Jane Smith</span>
          <span>John Roe</span>
          <span>Jane Roe</span>
          <span>Richard Roe</span>
          <span>Jane Roe</span>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
