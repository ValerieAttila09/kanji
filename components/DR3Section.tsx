import React from 'react';
import Image from 'next/image';

const DR3Section = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2 w-full animate-fadeInLeft">
            <div className="relative w-full h-80 border rounded-lg overflow-hidden">
               <Image src="/dr3-image.jpg" alt="DR3 Image" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="md:w-1/2 w-full animate-fadeInRight">
            <h2 className="text-3xl font-bold mb-4">Establishing DR3 as a Foundational Target in IBD and Beyond</h2>
            <p className="text-gray-600 mb-6">
              Shattuck is developing a potentially first-in-class DR3 blocking antibody for the treatment of Inflammatory Bowel Disease (IBD) and other inflammatory and immune-mediated diseases. Targeting immune receptors like DR3 may provide superior efficacy than targeting immune ligands such as TL1A. In addition, DR3 blocking antibodies are not expected to cause immune complex formation and thus may have a superior immunogenicity profile in comparison to TL1A blocking.
            </p>
            <button className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
              Our Science
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DR3Section;
