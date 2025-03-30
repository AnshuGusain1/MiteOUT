import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

const Initiative = () => {
  // Sample company initiatives data
  // In a real application, this would likely come from props or an API
  const initiatives = [
    {
      id: 1,
      title: "Sustainable Operations",
      description: "Reducing our carbon footprint by 30% by 2027 through renewable energy adoption and waste reduction practices.",
      progress: 45,
      leadBy: "Environmental Sustainability Team"
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Modernizing our infrastructure and processes to improve efficiency and customer experience.",
      progress: 60,
      leadBy: "Technology Innovation Department"
    },
    {
      id: 3,
      title: "Community Engagement",
      description: "Supporting local communities through volunteer programs and educational partnerships.",
      progress: 75,
      leadBy: "Corporate Social Responsibility Office"
    },
    {
      id: 4,
      title: "Workforce Development",
      description: "Investing in employee growth through training programs and career advancement opportunities.",
      progress: 35,
      leadBy: "Human Resources"
    }
  ];

  return (
    <div className="w-full py-20 bg-[#f2b03bff]">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Company Initiatives
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Our strategic initiatives reflect our commitment to growth, sustainability, and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((initiative) => (
              <div 
                key={initiative.id} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{initiative.title}</h3>
                <p className="text-white/90 mb-4">{initiative.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-white/80 mb-1">Progress</p>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500" 
                      style={{ width: `${initiative.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-right text-white/80 mt-1">{initiative.progress}% Complete</p>
                </div>
                
                <div className="text-sm text-white/80">
                  <span className="font-medium text-white">Lead by:</span> {initiative.leadBy}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm">
              For more information about our initiatives or to get involved, please contact the respective teams.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default Initiative;