import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import InitiativeImage from '../../assets/InitiativeImage.jpg';

const Initiative = () => {
  return (
    <div className="w-full py-20 bg-[#f2b03bff]">
      <RevealOnScroll>
        <div className="w-full max-w-screen-2xl mx-auto">
          {/* Full-width image with overlay */}
          <div className="relative w-full h-96 mb-12">
            <img 
              src={InitiativeImage}
              alt="Company Initiatives" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#f2b03bff] bg-opacity-70 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center px-4">
                Our Vision for the Future
              </h2>
            </div>
          </div>

          {/* Initiative description */}
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white text-lg leading-relaxed">
            Our project quickly pivoted from a simple school assignment to a culmination of our passions. We wish to go beyond engineering competitions and develop a technology that can be utilized by beekeepers. This site intends to get our name to beekeepers around us so we can hear feedback and continue to improve. MiteOut is built on feedback; If possible, we'd greatly appreciate it if you could fill out the quick survey on the last page of our site!
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Initiative;