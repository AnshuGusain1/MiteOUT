import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [bees, setBees] = useState([]);
  const fullText = "MiteOUT";
  
  // Generate random bee positions
  useEffect(() => {
    const createBees = () => {
      const newBees = [];
      for (let i = 0; i < 10; i++) {
        newBees.push({
          id: i,
          x: Math.random() * 80,
          y: Math.random() * 80,
          speedX: (Math.random() - 0.5) * 4,
          speedY: (Math.random() - 0.5) * 4,
          rotation: Math.random() * 360
        });
      }
      setBees(newBees);
    };
    
    createBees();
  }, []);
  
  // Move bees randomly
  useEffect(() => {
    const moveBees = setInterval(() => {
      setBees(prevBees => 
        prevBees.map(bee => {
          let newX = bee.x + bee.speedX;
          let newY = bee.y + bee.speedY;
          
          // Bounce off edges
          if (newX > 90 || newX < 0) bee.speedX *= -1;
          if (newY > 90 || newY < 0) bee.speedY *= -1;
          
          return {
            ...bee,
            x: newX > 90 ? 90 : newX < 0 ? 0 : newX,
            y: newY > 90 ? 90 : newY < 0 ? 0 : newY,
            rotation: (bee.rotation + (Math.random() * 20 - 10)) % 360
          };
        })
      );
    }, 50);
    
    return () => clearInterval(moveBees);
  }, []);

  // Complete after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show loading screen for 3 seconds
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-black-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {bees.map(bee => (
          <div 
            key={bee.id}
            className="absolute text-xl"
            style={{
              left: `${bee.x}%`,
              top: `${bee.y}%`,
              transform: `rotate(${bee.rotation}deg)`,
              transition: "all 0.05s linear"
            }}
          >
          </div>
        ))}
      </div>
      
      <div className="absolute mb-4 text-4xl font-mono font-bold z-10">
        {fullText}
      </div>
      
      <div className="absolute mt-32 w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};