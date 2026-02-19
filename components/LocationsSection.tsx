import React from 'react';

const LocationsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Locations</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Shattuck has R&D facilities in Durham, North Carolina and a corporate office in Austin, Texas.
        </p>
        <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default LocationsSection;
