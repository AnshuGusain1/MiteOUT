import React from 'react';
import { Leaf, Zap, Microscope, Users, Clock, Thermometer, Wifi, Database, Sun, Battery, Wind, Settings, Cloud, SlidersHorizontal, BarChart, ShieldAlert } from 'lucide-react';
import ModelViewer from '../ModelViewer';
import Header from '../Header';
import model2Url from '../../assets/PCB.gltf?url';
import Deployment from "../../assets/Deployment.jpeg";

// Provide both a named and default export so importing { Home } or default works.
export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-gray-900">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-5xl font-extrabold mb-4 text-green-900">
          An Autonomous Solution to Varroa Mites
        </h2>
        <img src={Deployment} alt="Deployment" className="w-full max-w-md mb-6 rounded-lg shadow-md" />
        <p className="max-w-2xl text-gray-700 mb-8">
          Our pollinators are dying at an alarming rate, with honeybee mortality reaching over 50% in recent years. The
          main culprit? The Varroa destructor mite. MiteOut offers a retrofittable device that provides fully
          autonomous, effective, and affordable chemical treatments to eradicate mites and stabilize your hives.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdqIWtBXgvfK5kVzCWQZ9jxMkOo34t0J40GGhUf6xwqIiAlrg/viewform?embedded=true"
          className="inline-block bg-green-800 text-white py-3 px-8 rounded-full font-medium hover:bg-green-700 transition"
        >
          Take Our Quick Survey
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 text-green-800">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Microscope className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Real-Time Monitoring</h4>
              <p className="text-gray-600 text-center">
                Our system uses sensors to read hive temperature and humidity, giving you a clear picture of your
                hive's condition.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Zap className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Autonomous Dosing</h4>
              <p className="text-gray-600 text-center">
                The system automatically doses the hive with precision micro-doses based on real-time data for
                effective treatment.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Leaf className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Eco-Friendly & Effective</h4>
              <p className="text-gray-600 text-center">
                Our approach is cheaper, easier, and more effective than other treatments, while minimizing chemical
                use.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Users className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Community Built</h4>
              <p className="text-gray-600 text-center">
                Developed and refined based on feedback from beekeepers like you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-green-800">Our Story & Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            MiteOut was founded by Jonah Hymes, a computer engineering student at Dartmouth College, and Lucas Bell, a
            mechanical engineering student at Rensselaer Polytechnic Institute. What started as a shared passion for
            robotics and mechatronics has evolved into an award-winning solution for a critical problem in agriculture.
            After placing second in the Thomas Edison Pitch Contest and first in the Siena College Business Plan
            Competition, we are now developing MiteOut under a provisional patent to bring a real-world, effective tool
            to beekeepers everywhere.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-extrabold text-center mb-16 text-green-900">How It Works</h3>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Hardware Column */}
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-center mb-8 text-green-800">Hardware</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <Clock className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Real-Time Clock</h5>
                  <p className="text-gray-600 text-sm">Ensures precise, reliable timing for treatments.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <Thermometer className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Temp/Humidity Sensors</h5>
                  <p className="text-gray-600 text-sm">Monitors hive conditions to inform dosing decisions.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <Wifi className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">WiFi & SD Card</h5>
                  <p className="text-gray-600 text-sm">Dual data logging for redundancy and easy access.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <Sun className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Solar Powered</h5>
                  <p className="text-gray-600 text-sm">Runs continuously and sustainably off a LiPo battery.</p>
                </div>
              </div>
            </div>

            {/* Software Column */}
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-center mb-8 text-green-800">Software</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <Cloud className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Wireless Control</h5>
                  <p className="text-gray-600 text-sm">Adjust settings from anywhere via a Google Sheet.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <BarChart className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Automated Logging</h5>
                  <p className="text-gray-600 text-sm">All data is logged automatically for easy tracking.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <SlidersHorizontal className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Intelligent Dosing</h5>
                  <p className="text-gray-600 text-sm">Dispenses treatments based on real-time conditions.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-green-50 rounded-2xl shadow-lg">
                  <ShieldAlert className="w-12 h-12 text-green-700 mb-3" />
                  <h5 className="text-lg font-semibold mb-1">Emergency Shutoff</h5>
                  <p className="text-gray-600 text-sm">Includes failsafes for system and hive protection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prototype" className="relative w-full py-16 bg-green-50 flex justify-center items-center">
        <div className="w-4/5 max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 h-96 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
            <ModelViewer />
          </div>
          <div className="flex-1 h-96 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
            <ModelViewer modelUrl={model2Url} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-200 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} MiteOut. Built with passion for bees and beekeepers.
          </div>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="/contact" className="hover:text-white">Contact</a>
            <a href="/prototypes" classname = "hover:text-white">Prototypes</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;
