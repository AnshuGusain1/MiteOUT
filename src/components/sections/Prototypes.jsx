import React from 'react';
import BeehiveImage from "../../assets/Hive.png";
import HomeBackground from "../../assets/HomeBackground.png";
import Header from '../Header';
import HiveMindImage from "../../assets/HiveMindPCB.png";

export const Prototypes = () => {
  // Benefits sections for MiteWhipe
  const miteWhipeBenefits = [
    {
      heading: "A Surefire Shot",
      content: "Precision dosing of miticides ensures that the MiteWhipe will fully eradicate mites. The consistency and efficiency of this treatment will take the stress off your mind knowing that your hives will always be protected."
    },
    {
      heading: "One Time Purchase",
      content: "The MiteWhipe is a one-stop shop for all miticide needs. Due to its rugged design, MiteOut will be the only treatment dispenser you'll ever have to buy."
    },
    {
      heading: "Stress-Free Beekeeping",
      content: "After preferences are set, the MiteWhipe is fully autonomous. Our system eliminates beekeeper stress of worrying about mites, and when or how to treat them."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <div 
        className="h-64 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          position: "relative"
        }}
      >
        <div className="absolute inset-0 bg-green-800 bg-opacity-40"></div>
        <h1 className="text-4xl font-bold text-white relative z-10">Our Prototypes</h1>
      </div>

      {/* Products Section */}
      <div className="w-full bg-green-50 py-8">
        <div className="max-w-6xl mx-auto space-y-12 px-4">

          {/* MiteWhipe */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 text-left">
              <h2 className="text-2xl font-bold mb-4 text-black">The MiteWhipe</h2>
              <p className="text-black mb-4">
                The MiteWhipe is an autonomous, solar-powered device that retrofits onto existing beehives above the hive entrance. Once fitted onto a hive, our system will give precise microdoses of miticides. Based on ambient temperature data, the MiteWhipe can dose at optimal times to eradicate varroa mites. The MiteWhipe can last unattended for a full treatment cycle and only needs to be accessed when treatments are being changed.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img 
                src={BeehiveImage} 
                alt="MiteWhipe beehive attachment" 
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Benefits of MiteWhipe */}
          <div className="px-4">
            <h2 className="text-2xl font-bold mb-8 text-black">Benefits of the MiteWhipe:</h2>
            <div className="flex flex-col md:flex-row justify-between">
              {miteWhipeBenefits.map((section, index) => (
                <div key={index} className="md:w-1/3 px-4 mb-6 md:mb-0">
                  <h3 className="text-lg font-bold mb-2 text-black">{section.heading}</h3>
                  <p className="text-sm text-black">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HiveMind */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 text-left">
              <h2 className="text-2xl font-bold mb-4 text-black">The HiveMind Module</h2>
              <p className="text-black">
                HiveMind is a data collection module for beehives designed to monitor key metrics like humidity, weight, and temperature, along with daily hive activity. This information empowers beekeepers with insights to optimize yield and hive health. HiveMind also lays the groundwork for a machine learning model in future iterations, driving intelligent hive management through data.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img 
                src={HiveMindImage} 
                alt="HiveMind data collection module PCB" 
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Contact Footer */}
      <div className="w-full bg-green-800 py-4 text-center text-sm text-white">
        Contact Us: MiteOutTech@gmail.com
      </div>
    </div>
  );
};

export default Prototypes;