import { Link } from 'react-router-dom';
import { RevealOnScroll } from "../RevealOnScroll";
import Initiative from "./Initiative.jsx";
import AboutHome from "./AboutHome.jsx";
import BackgroundImage from '../../assets/HomeBackground.png'

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative w-full"
        style={{ 
          backgroundImage: `url(${BackgroundImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          width: "100vw", // Use viewport width
          marginLeft: "calc(-50vw + 50%)" // This centers the section if it's in a container
        }}
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4 font-['Orbitron']">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#000000] to-[#696969] bg-clip-text text-transparent leading-right">
              We are MiteOUT
            </h1>

            <h1 className="text-5xl text-black">
              About Us:
            </h1>


            <p className="text-black text-lg mb-8 max-w-lg mx-auto p-6 border border-orange-300 rounded-lg bg-yellow shadow-md">
            In the halls of Shaker High School, MiteOut began as a senior year engineering capstone project between Lucas and I. Raised in upstate New York, we've both grown up surrounded by nature and have always felt impacted by environmental issues. We started MiteOut to combat one of the most pressing environmental issues today, the varroa mite. We sincerely hope that our work can create a brighter tomorrow for the environment that raised us. 
            -Jonah
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/projects"
                className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="border border-orange-500/50 text-black-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
      
      {/* Add the Initiative component here with full width styling */}
      <section 
        className="py-12 bg-gray-50 relative"
        style={{ 
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)"
        }}
      >
        <Initiative />
        <AboutHome />
      </section>

      {/* Social Links Section */}
      <section className="py-8 relative" style={{ 
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        backgroundColor: "#f2b03bff"  // Light peach/orange background
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Connect With Us</h2>
            <div className="flex items-center space-x-6">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/company/miteout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Google Form Link */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqIWtBXgvfK5kVzCWQZ9jxMkOo34t0J40GGhUf6xwqIiAlrg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                <span>Google Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};