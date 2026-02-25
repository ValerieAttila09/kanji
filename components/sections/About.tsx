import React from 'react';
import Image from 'next/image';
import secondImage from "../../assets/images/the-blowup-4gSvcvqCbls-unsplash.jpg"

const AboutSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-neutral-400">Our Mission</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-3xl md:text-4xl font-medium text-neutral-50 mb-8">
              Our mission is to provide high-quality, stylish, and accessible clothing for everyone. We believe that everyone deserves to feel and look amazing, every day.
            </p>
            <p className="text-lg text-neutral-300">
              Our approach combines minimalist design with functionality, ensuring every piece is not only fashionable but also comfortable and durable. We are committed to innovation, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="w-full h-[500px] relative">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fashion workplace"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="w-full h-[500px] relative">
            <Image
              src={secondImage}
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </div>

        {/* What Drives Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-neutral-400">What Drives Us</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-3xl md:text-4xl font-medium text-neutral-50 mb-8">
              We are a team of fashion enthusiasts, designers, and textile experts passionate about creating apparel you’ll love. Our story is woven with a commitment to quality, style, and comfort.
            </p>
            <p className="text-lg text-neutral-300">
              We ask: What do our customers want? How can we make better clothes? How can we make fashion more accessible? We start with you, our customer, and work tirelessly to exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
