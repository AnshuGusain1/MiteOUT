import { useState } from 'react';
import { ExternalLink, Video, Code, BookOpen } from 'lucide-react';

export function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Dartmouth Social Blueprint Challenge",
      description: "Feburary 2025",
      technologies: ["React", "Node.js", "WebSockets", "Chart.js"],
      videoLink: "https://youtu.be/3uCNxKdQ2lQ",
      videoId: "3uCNxKdQ2lQ",
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Thomas Edison 1",
      description: "[Video Submitted to the Thomas Edison Pitch Contest in January 2024]",
      technologies: ["React Native", "Firebase", "Redux", "Cloud Storage"],
      videoLink: "https://youtu.be/4Y7Bv0KtsfM",
      videoId: "4Y7Bv0KtsfM",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Slingshot Competition",
      description: "A wearable-compatible application that tracks workouts, calories, and provides personalized fitness recommendations.",
      technologies: ["React", "TypeScript", "GraphQL", "MongoDB"],
      videoLink: "https://youtu.be/dwA-nyGQZzY",
      videoId: "dwA-nyGQZzY",
      icon: <Video className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Mid-Year Presentation",
      description: "An online platform for students to collaborate, share resources, and study together in a virtual environment.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      videoLink: "https://youtu.be/ZkDPKvpKTuY",
      videoId: "ZkDPKvpKTuY",
      icon: <ExternalLink className="w-8 h-8" />
    }
  ];

  // Function to extract YouTube ID from URL (not needed since we're hardcoding IDs now)
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="bg-orange-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-700 mb-8 text-center">Featured Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                activeProject === index 
                  ? "bg-orange-400 text-white shadow-lg scale-105" 
                  : "bg-orange-200 text-orange-800 hover:bg-orange-300"
              }`}
              onClick={() => setActiveProject(index)}
            >
              <div className="flex items-center gap-3 mb-2">
                {project.icon}
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-tan-100 bg-amber-50 border border-orange-200 rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">{projects[activeProject].title}</h2>
              <p className="text-orange-900 mb-6">{projects[activeProject].description}</p>
              
              <div className="mb-6">
                <h4 className="font-medium text-orange-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, i) => (
                    <span key={i} className="bg-orange-300 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={projects[activeProject].videoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Video className="w-5 h-5" />
                Watch Demo Video
              </a>
            </div>
            
            <div className="md:w-1/2 bg-amber-100 rounded-lg overflow-hidden flex items-center justify-center">
              <a 
                href={projects[activeProject].videoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative group">
                  {/* YouTube thumbnail image (high quality) */}
                  <img 
                    src={`https://img.youtube.com/vi/${projects[activeProject].videoId}/hqdefault.jpg`}
                    alt={`${projects[activeProject].title} YouTube thumbnail`}
                    className="w-full h-auto rounded-lg"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-90 transition-opacity">
                    <div className="bg-orange-600 rounded-full p-4 shadow-lg">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}