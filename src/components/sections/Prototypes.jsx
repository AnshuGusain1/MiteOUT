import React, { useState } from 'react';
import BeehiveImage from "../../assets/Hive.png";
import HomeBackground from "../../assets/HomeBackground.png";

export const Prototypes = () => {
  const slides = [
    {
      id: 1,
      title: "The MiteWhipe",
      image: BeehiveImage,
      content: "The MiteWhipe is an autonomous, solar-powered device that retrofits onto existing beehives above the hive entrance. Once fitted onto a hive, our system will give precise microdoses of miticides. Based on ambient temperature data, the MiteWhipe can dose at optimal times to eradicate varroa mites. The MiteWhipe can last unattended for a full treatment cycle and only needs to be accessed when treatments are being changed."
    },
    {
      id: 2,
      title: "Benefits of the MiteWhipe:",
      sections: [
        {
          heading: "A Surefire Shot",
          content: "Precision dosing of miticides ensures that the MiteWhipe will fully eradicate mites. The consistency and efficiency of this treatment will take the stress off your mind knowing that your hives will always be protected."
        },
        {
          heading: "One Time Purchase",
          content: "The MiteWhipe is a one-stop shop for all miticide needs. Due to its rugged design, MiteOut will be the only treatment dispenser you'll ever have to buy."
        },
        {
          heading: "Stress-Free Beekeeping",
          content: "After preferences are set, the MiteWhipe is fully autonomous. Our system eliminates beekeeper stress of worrying about mites, and when or how to treat them."
        }
      ]
    }
    // Add more slides if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const renderSlideContent = (slide) => {
    if (slide.id === 1) {
      return (
        <div className="flex flex-col md:flex-row items-center px-4 py-8">
          <div className="md:w-1/2 md:pr-8 text-left">
            <h2 className="text-2xl font-bold mb-4 text-black md:text-left">{slide.title}</h2>
            <p className="text-black">{slide.content}</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img 
              src={slide.image} 
              alt="MiteWhipe beehive attachment" 
              className="rounded-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>
      );
    } else if (slide.id === 2) {
      return (
        <div className="px-4 py-8">
          <h2 className="text-2xl font-bold mb-8 text-black">{slide.title}</h2>
          <div className="flex flex-col md:flex-row justify-between">
            {slide.sections.map((section, index) => (
              <div key={index} className="md:w-1/3 px-4 mb-6 md:mb-0">
                <h3 className="text-lg font-bold mb-2 text-black">{section.heading}</h3>
                <p className="text-sm text-black">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div 
        className="h-64 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          position: "relative"
        }}
      >
        <div className="absolute inset-0 bg-orange-300 bg-opacity-40"></div>
        <h1 className="text-4xl font-bold text-white relative z-10">Our Prototypes</h1>
      </div>
      
      {/* Slide Content */}
      <div className="w-full bg-amber-50 py-8">
        <div className="max-w-6xl mx-auto">
          {renderSlideContent(slides[currentSlide])}
          
          {/* Horizontal Divider */}
          <div className="w-full max-w-3xl mx-auto border-t border-orange-300 my-8"></div>
          
          {/* Navigation - Hidden in the screenshot but keeping for functionality */}
          <div className="flex justify-between max-w-3xl mx-auto px-4 hidden">
            <button 
              onClick={previousSlide}
              className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded"
            >
              Previous
            </button>
            
            <div className="text-center pt-2">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            
            <button 
              onClick={nextSlide}
              className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Footer */}
      <div className="w-full bg-orange-300 py-4 text-center text-sm text-black">
        Contact Us: MiteOutTech@gmail.com
      </div>
    </div>
  );
};

export default Prototypes;