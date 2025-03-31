import React, { useState, useEffect } from "react";
import DartmouthImage from "../../assets/Dartmouth1.png";
import RPIImage from "../../assets/RPIImage.jpg";
import GrantAward from "../../assets/GrantAward.jpg";
import SienaImage from "../../assets/Siena1.png";
import EdisonImage from "../../assets/EdisonImage.jpeg";

const Awards = () => {
  const [featuredAward, setFeaturedAward] = useState(null);

  useEffect(() => {
    // Randomly select a featured award when component mounts
    const randomIndex = Math.floor(Math.random() * awards.length);
    setFeaturedAward(awards[randomIndex]);
  }, []); // Empty dependency array means this runs once on mount

  const awards = [
    {
      id: 1,
      title: "Dartmouth College Social Blueprint Challenge",
      year: "February 2025 - 1st place",
      description: "....",
      image: DartmouthImage,
    },
    {
      id: 2,
      title: "RPI Problem Pitch Competition",
      year: "December 2024 - 3rd place",
      description: "...",
      image: RPIImage,
    },
    {
      id: 3,
      title: "Dartmouth College Founder Grant",
      year: "November 2024 - Grant Award",
      description: "...",
      image: GrantAward,
    },
    {
      id: 4,
      title: "Siena College Business Plan Competition",
      year: "June 2024-1st place",
      description: "...",
      image: SienaImage,
    },
    {
      id: 5,
      title: "Thomas Edison Pitch Contest",
      year: "Description",
      description: "...",
      image: EdisonImage,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Achievements</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition for our commitment to excellence, innovation, and customer satisfaction in pest control services.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={award.image} 
                  alt={award.title} 
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: award.id === 2 ? "0px -30px" : award.id === 5 ? "0px -10px" : "center"
                  }} 
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=Award+Image";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-emerald-600">{award.year}</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{award.organization}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature award */}
        {featuredAward && (
          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredAward.image} 
                  alt={featuredAward.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400?text=Featured+Award";
                  }} 
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black bg-opacity-20 rounded-full mb-4">
                  Featured Achievement
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{featuredAward.title}</h3>
                <p className="text-white mb-6">{featuredAward.description}</p>
                <div className="flex items-center">
                  <span className="text-white font-medium">{featuredAward.organization}</span>
                  <span className="mx-2 text-white">•</span>
                  <span className="text-white">{featuredAward.year}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { Awards };