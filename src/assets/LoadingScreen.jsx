import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [bees, setBees] = useState([]);
  const fullText = "MiteOUT";
  const [progress, setProgress] = useState(0);
  
  // Generate random bee positions
  useEffect(() => {
    const createBees = () => {
      const newBees = [];
      for (let i = 0; i < 10; i++) {
        newBees.push({
          id: i,
          x: Math.random() * 90,
          y: Math.random() * 90,
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

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return newProgress;
      });
    }, 75); // Faster progress - completes in 1.5 seconds
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-amber-50 text-black-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {bees.map(bee => (
          <div 
            key={bee.id}
            className="absolute text-2xl"
            style={{
              left: `${bee.x}%`,
              top: `${bee.y}%`,
              transform: `rotate(${bee.rotation}deg)`,
              transition: "all 0.05s linear"
            }}
          >
            🐝
          </div>
        ))}
      </div>
      
      <div className="absolute mb-16 text-5xl font-mono font-bold z-10 text-amber-800">
        {fullText}
      </div>
      
      <div className="absolute mt-16 w-[250px] h-[8px] bg-amber-200 rounded-full relative overflow-hidden">
        <div 
          className="h-full bg-amber-500 rounded-full shadow-[0_0_15px_#f59e0b] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="absolute mt-32 text-amber-700 italic">
        Loading...
      </div>
    </div>
  );
};