import React from 'react';

const PipelineSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Pipeline</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Shattuck's lead DR3 blocking antibody, SL-325, demonstrates superior inhibition and efficacy in preclinical assays over therapies targeting TL1A. SL-325 harnesses the power of high affinity, epitope specificity, and critical Fc-silencing to block TL1A from engaging DR3 expressed on multiple immune cells that drive inflammation.
        </p>

        <div className="flex justify-center items-center space-x-8 mb-10 text-blue-600 font-bold">
            <span>SL-325</span>
            <span>SL-401</span>
            <span>KADMON</span>
        </div>

        <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
          Our Pipeline
        </button>
      </div>
    </section>
  );
};

export default PipelineSection;
