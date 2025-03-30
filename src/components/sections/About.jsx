import React, { useState } from 'react';

export const About = () => {
  // Example slides - replace with your actual content from MiteOut Technologies
  const slides = [
    {
      id: 1,
      title: "MiteOut Technologies",
      content: "Innovative solutions for dust mite control",
    },
    {
      id: 2,
      title: "Our Mission",
      content: "Creating healthier living environments through advanced technology",
    },
    {
      id: 3,
      title: "Product Overview",
      content: "Introducing our revolutionary dust mite elimination system",
    },
    {
      id: 4,
      title: "Market Opportunity",
      content: "Addressing a $2.5B global market with 15% annual growth",
    },
    {
      id: 5,
      title: "Competitive Advantage",
      content: "Proprietary technology with 3 pending patents",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded shadow p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">About MiteOut Technologies</h1>
      
      {/* Current slide */}
      <div className="bg-gray-100 p-8 rounded min-h-64 flex flex-col items-center justify-center text-center mb-4">
        <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <p className="text-lg">{slides[currentSlide].content}</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button 
          onClick={previousSlide}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        
        <div className="text-center pt-2">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        
        <button 
          onClick={nextSlide}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default About;