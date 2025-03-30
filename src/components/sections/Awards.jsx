import React from "react";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Dartmouth College Social Blueprint Challenge",
      year: "February 2025 - 1st place",
      organization: "National Pest Management Association",
      description: "Recognized for outstanding service and innovative approaches to pest management solutions.",
      image: "/assets/award-excellence.jpg",
    },
    {
      id: 2,
      title: "Environmental Stewardship Award",
      year: "2023",
      organization: "Green Business Alliance",
      description: "Awarded for commitment to eco-friendly pest control methods and sustainable business practices.",
      image: "/assets/award-environmental.jpg",
    },
    {
      id: 3,
      title: "Customer Satisfaction Gold Star",
      year: "2023",
      organization: "Consumer Choice Awards",
      description: "Highest rated pest control service based on customer reviews and satisfaction surveys.",
      image: "/assets/award-customer.jpg",
    },
    {
      id: 4,
      title: "Industry Innovation Award",
      year: "2022",
      organization: "Pest Control Technology Magazine",
      description: "Recognized for developing cutting-edge methods in mite prevention and removal.",
      image: "/assets/award-innovation.jpg",
    },
    {
      id: 5,
      title: "Community Impact Recognition",
      year: "2021",
      organization: "City Chamber of Commerce",
      description: "Honored for contributions to community health and safety through educational programs.",
      image: "/assets/award-community.jpg",
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

        {/* Feature award (if there's one you want to highlight) */}
        {awards.length >= 5 && (
          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={awards[4].image} 
                  alt={awards[4].title} 
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
                <h3 className="text-2xl font-bold text-white mb-4">{awards[4].title}</h3>
                <p className="text-white mb-6">{awards[4].description}</p>
                <div className="flex items-center">
                  <span className="text-white font-medium">{awards[4].organization}</span>
                  <span className="mx-2 text-white">•</span>
                  <span className="text-white">{awards[4].year}</span>
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