import React from 'react';
import { Leaf, Zap, Microscope, Users } from 'lucide-react';
import ModelViewer from '../ModelViewer';

// Provide both a named and default export so importing { Home } or default works.
export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-green-800">MiteOUT</h1>
          <nav className="space-x-6 text-gray-600">
            <a href="#features" className="hover:text-green-800">Features</a>
            <a href="#about" className="hover:text-green-800">About</a>
            <a href="/survey" className="hover:text-green-800">Survey</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h2 className="text-5xl font-extrabold mb-4 text-green-900">
          Precision Beekeeping<br />for Healthier Hives
        </h2>
        <p className="max-w-2xl text-gray-700 mb-8">
          Combining cutting-edge technology with the rhythms of nature, MiteOUT empowers beekeepers to monitor,
          manage, and protect their colonies against harmful mites. Join us in creating a future where every hive thrives.
        </p>
        <a
          href="/survey"
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
            for beekeepers. MiteOUT is more than just a tool—it's a partnership built on continuous feedback
            from the community. Help us refine our technology by{' '}
            <a href="/survey" className="text-green-800 underline hover:text-green-600">
              filling out our quick survey
            </a>.
          </p>
        </div>
      </section>

      <section id="prototype" className="relative w-full py-16 bg-green-50 flex justify-center items-center">
        <div className="w-4/5 max-w-4xl h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
          <ModelViewer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-200 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} MiteOUT. Built with passion for bees and beekeepers.
          </div>
          <nav className="space-x-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="/survey" className="hover:text-white">Survey</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;