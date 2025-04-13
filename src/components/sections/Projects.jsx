import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Video, Code, BookOpen } from 'lucide-react';

export function Projects() {
  const projectRefs = useRef([]);
  const [visibleProject, setVisibleProject] = useState(null);
  
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
      description: "Video Submitted to the Thomas Edison Pitch Contest in January 2024",
      technologies: ["React Native", "Firebase", "Redux", "Cloud Storage"],
      videoLink: "https://youtu.be/4Y7Bv0KtsfM",
      videoId: "4Y7Bv0KtsfM",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Slingshot Competition",
      description: "Video Submitted to the National Geographic Slingshot Competition in January 2024",
      technologies: ["React", "TypeScript", "GraphQL", "MongoDB"],
      videoLink: "https://youtu.be/dwA-nyGQZzY",
      videoId: "dwA-nyGQZzY",
      icon: <Video className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Mid-Year Presentation",
      description: "December 2024: Our presentation was given to summarize our project.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      videoLink: "https://youtu.be/ZkDPKvpKTuY",
      videoId: "ZkDPKvpKTuY",
      icon: <ExternalLink className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectId = parseInt(entry.target.getAttribute('data-project-id'));
          setVisibleProject(projectId);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects.length]);

  return (
    <div className="bg-orange-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-orange-700 mb-12 text-center">Featured Projects</h1>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-project-id={index}
              className="scroll-mt-24"
            >
              <div className="bg-amber-50 border border-orange-200 rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left side: Video thumbnail */}
                  <div className="lg:w-1/2">
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block relative group"
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                        alt={`${project.title} YouTube thumbnail`}
                        className="w-full h-full object-cover aspect-video"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-90 transition-opacity">
                        <div className="bg-orange-600 rounded-full p-4 shadow-lg">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Right side: Project details */}
                  <div className="lg:w-1/2 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {project.icon}
                      <h2 className="text-3xl font-bold text-orange-600">{project.title}</h2>
                    </div>
                    
                    <p className="text-orange-900 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-orange-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-orange-300 text-orange-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Video className="w-5 h-5" />
                      Watch Demo Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}