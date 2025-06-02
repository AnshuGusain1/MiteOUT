import { RevealOnScroll } from "../RevealOnScroll";

import LucasHeadshot from "../../assets/Lucas_Headshot.png";
import JonahHeadshot from "../../assets/Jonah_Headshot.png";
import PlaceholderHeadshot from "../../assets/AnshuHeadshot.png";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-orange-100 py-20 relative"
      style={{ 
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)"
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 text-black text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-7xl mx-auto">
            {/* Company Information */}
            <div className="bg-orange-200 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="text-black font-medium">Address</p>
                    <p className="text-gray-700">Latham</p>
                    <p className="text-gray-700">NY</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="text-black font-medium">Phone</p>
                    <p className="text-gray-700">(518) 210-0594 - Jonah H.</p>
                    <p className="text-gray-700">(518) 867-7449 - Lucas B.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-black font-medium">Email</p>
                    <p className="text-gray-700">MiteOutTech@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  <div>
                    <p className="text-black font-medium">Website</p>
                    <p className="text-gray-700">www.miteouttech.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Form */}
            <div className="bg-orange-200 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">Send Us a Message</h3>
              <div className="w-full h-full min-h-[400px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdqIWtBXgvfK5kVzCWQZ9jxMkOo34t0J40GGhUf6xwqIiAlrg/viewform?embedded=true"
                  className="w-full h-full min-h-[400px] border-0 rounded"
                  title="Contact Form"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms"
                >
                  Loading Google Form...
                </iframe>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                Have any questions or feedback? Fill out our form and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
          
          {/* Founders Information */}
          <div
            className="mb-8 max-w-7xl mx-auto"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpolygon points='20,0 40,10 40,30 20,40 0,30 0,10' stroke='%23FBBF24' fill='none' stroke-width='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "40px 40px",
              padding: "2rem"
            }}
          >
            <h3 className="text-2xl font-bold mb-6 text-black text-center">Meet Our Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Founder 1 */}
              <div className="bg-orange-200 rounded-lg shadow-md p-6 flex flex-col items-center md:col-start-1">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
                  <img 
                    src={JonahHeadshot} 
                    style={{ marginTop: '-80px', transform: 'scale(1.1)' }}
                    alt="Jonah Hymes" 
                    className="w-80 h-80 object-cover rounded-full justify-center py-20"
                  />
                </div>
                <h4 className="text-xl font-bold text-black">Jonah Hymes</h4>
                <p className="text-orange-700 mb-3">CTO</p>
                <div className="space-y-2 text-center">
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Email:</span> JonahHymes@gmail.com
                  </p>
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Phone:</span> (518) 210-0594
                  </p>
                </div>
              </div>
              
              {/* Founder 2 */}
              <div className="bg-orange-200 rounded-lg shadow-md p-6 flex flex-col items-center md:col-start-3">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
                  <img 
                    src={LucasHeadshot} 
                    style={{ marginTop: '-80px', transform: 'scale(1.1)' }}
                    alt="Lucas Bell" 
                    className="w-80 h-80 object-cover rounded-full justify-center py-20"
                  />
                </div>
                <h4 className="text-xl font-bold text-black">Lucas Bell</h4>
                <p className="text-orange-700 mb-3">CEO</p>
                <div className="space-y-2 text-center">
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Email:</span> Lbell42006@gmail.com
                  </p>
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Phone:</span> (518) 867-7449
                  </p>
                </div>
              </div>
              {/* Founder 3 - Placeholder */}
              <div className="bg-orange-200 rounded-lg shadow-md p-6 flex flex-col items-center md:col-start-2">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-orange-500">
                  <img
                    src={PlaceholderHeadshot}
                    style={{ marginTop: '-73px', transform: 'scale(1.1)' }}
                    alt="Placeholder Founder"
                    className="w-80 h-80 object-cover rounded-full justify-center py-20"
                  />
                </div>
                <h4 className="text-xl font-bold text-black">Hridaanshu Gusain</h4>
                <p className="text-orange-700 mb-3">Lead Engineer</p>
                <div className="space-y-2 text-center">
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Email:</span> Hridaanshu@gmail.com
                  </p>
                  <p className="text-gray-700">
                    <span className="text-orange-700 font-medium">Phone:</span> (518) 867-7099
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};