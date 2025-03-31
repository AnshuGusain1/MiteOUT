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
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#f1740fff] to-[#9f4b02ff] bg-clip-text text-transparent leading-right">
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
                className="border border-orange-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
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
    </>
  );
};