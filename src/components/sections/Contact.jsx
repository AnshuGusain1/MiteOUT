import { useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

import LucasHeadshot from "../../assets/Lucas_Headshot.png";
import JonahHeadshot from "../../assets/Jonah_Headshot.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Information */}
            <div className="bg-white/10 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">123 Innovation Way, Tech District</p>
                    <p className="text-gray-300">San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">(415) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">MiteOutTech@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                  <div>
                    <p className="text-white font-medium">Website</p>
                    <p className="text-gray-300">www.yourcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/10 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <label htmlFor="name" className="text-white block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="text-white block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="text-white block mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Subject"
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="text-white block mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    className="w-full bg-gray-800 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Founders Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center">Meet Our Founders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="bg-white/10 rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                  <img 
                    src={JonahHeadshot} 
                    style={{ marginTop: '-80px' }}
                    alt="Jonah Hymes" 
                    className="w-80 h-80 object-cover rounded-full justify-center py-20"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">Jonah Hymes</h4>
                <p className="text-blue-400 mb-3">CTO</p>
                <div className="space-y-2 text-center">
                  <p className="text-gray-300">
                    <span className="text-blue-500">Email:</span> JonahHymes@gmail.com
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-500">Phone:</span> ...
                  </p>
                </div>
              </div>
              
              {/* Founder 2 */}
              <div className="bg-white/10 rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                  <img 
                    src={LucasHeadshot} 
                    style={{ marginTop: '-80px' }}
                    alt="Lucas Bell" 
                    className="w-80 h-80 object-cover rounded-full justify-center py-20"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">Lucas Bell</h4>
                <p className="text-blue-400 mb-3">CEO</p>
                <div className="space-y-2 text-center">
                  <p className="text-gray-300">
                    <span className="text-blue-500">Email:</span> Lbell42006@gmail.com
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-500">Phone:</span> ...
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