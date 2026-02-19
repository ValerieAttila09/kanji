import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-black text-white">
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fadeInUp">
          Advancing the Standard of Care in Inflammatory Diseases
          <br />
          Through Innovation
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          SL-325 is the first clinical stage monoclonal antibody targeting DR3, the receptor for TL1A, which has potential to achieve best-in-class remission rates in IBD and beyond.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          Our Pipeline
        </button>
      </div>
    </section>
  );
};

export default Hero;
