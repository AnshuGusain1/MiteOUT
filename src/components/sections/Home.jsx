import React from 'react';
import { Leaf, Zap, Microscope, Users } from 'lucide-react';
import ModelViewer from '../ModelViewer';
import Header from '../Header';
import model2Url from '../../assets/PCB.gltf?url';

// Provide both a named and default export so importing { Home } or default works.
export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-gray-900">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-5xl font-extrabold mb-4 text-green-900">
          Precision Beekeeping<br />for Healthier Hives
        </h2>
        <p className="max-w-2xl text-gray-700 mb-8">
          Combining cutting-edge technology with the rhythms of nature, MiteOut empowers beekeepers to monitor,
          manage, and protect their colonies against harmful mites. Join us in creating a future where every hive thrives.
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
                Continuous data on mite activity and hive health, anytime, anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Zap className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Instant Alerts</h4>
              <p className="text-gray-600 text-center">
                Automated notifications when mite levels exceed safe thresholds.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Leaf className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Eco-Friendly Treatment</h4>
              <p className="text-gray-600 text-center">
                Precision dosing to minimize chemicals and protect pollinators.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-2xl shadow">
              <Users className="w-12 h-12 text-green-800 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Community Feedback</h4>
              <p className="text-gray-600 text-center">
                Built on your insights—share experiences to help us improve.
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
            What began as a simple school assignment quickly pivoted into the culmination of our
            passions. We wanted to transcend engineering competitions by creating a real-world solution
            for beekeepers. MiteOut is more than just a tool—it's a partnership built on continuous feedback
            from the community.{' '}
          </p>
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
            <a href="MiteOut/contact" className="hover:text-white">Contact</a>
            <a href="/prototypes" classname = "hover:text-white">Prototypes</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;