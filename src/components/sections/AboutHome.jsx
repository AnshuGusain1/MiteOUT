import React from 'react';

const AboutHome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 bg-orange-300 min-h-screen text-black">
      {/* Left column - Jonah Hymes */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold italic mb-4 text-black">Jonah Hymes</h2>
        <p className="text-xl font-semibold mb-2 text-black">CTO & Co-Founder</p>
        <p className="mb-2 text-black">Dartmouth College 2028</p>
        <p className="text-black">Computer Engineering & Computer Science</p>
      </div>
      
      {/* Middle - Photo */}
      <div className="mx-4">
        <img 
          src="/api/placeholder/600/500" 
          alt="Co-founders in formal attire with matching ties" 
          className="rounded-md max-w-full h-auto"
        />
      </div>
      
      {/* Right column - Lucas Bell */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold italic mb-4 text-black">Lucas Bell</h2>
        <p className="text-xl font-semibold mb-2 text-black">CEO & Co-Founder</p>
        <p className="mb-2 text-black">Rensselaer Polytechnic Institute 2028</p>
        <p className="text-black">Mechanical Engineering</p>
      </div>
    </div>
  );
};

export default AboutHome;