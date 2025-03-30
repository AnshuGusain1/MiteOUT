import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* Image Slideshow */}
      <div className="relative bg-gray-900/50 rounded-lg overflow-hidden mb-4 h-64">
        <img
          src={project.images[selectedImage]?.url || "/api/placeholder/600/300"}
          alt={project.images[selectedImage]?.alt || project.title}
          className="w-full h-full object-cover"
        />
        {project.images.length > 1 && (
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="bg-blue-500/20 text-white p-2 rounded-full hover:bg-blue-500/40 transition"
            >
              ←
            </button>
            <button
              onClick={() =>
                setSelectedImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="bg-blue-500/20 text-white p-2 rounded-full hover:bg-blue-500/40 transition"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Selection */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className={`w-12 h-12 cursor-pointer rounded overflow-hidden border ${
              selectedImage === index ? "border-blue-500" : "border-white/10"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between items-center">
        <a
          href={project.link}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
      link: "#",
      images: [
        { url: "/images/cloud1.jpg", alt: "Cloud dashboard" },
        { url: "/images/cloud2.jpg", alt: "Resource monitoring" }
      ]
    },
    {
      title: "AI Analytics Dashboard",
      description: "ML-powered data visualization platform with predictive analytics and interactive reports.",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      link: "#",
      images: [
        { url: "/images/analytics1.jpg", alt: "Analytics dashboard" },
        { url: "src/images/Hult2025/IMG_5711.jpeg", alt: "Data visualization" }
      ]
    },
    {
      title: "E-Commerce Web App",
      description: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
      images: [
        { url: "src/images/Hult2025/IMG_5709.jpeg", alt: "Product showcase" },
        { url: "src/images/Hult2025/IMG_5710.jpeg", alt: "Shopping cart" }
      ]
    },
    {
      title: "Real-Time Chat App",
      description: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      link: "#",
      images: [
        { url: "/images/chat1.jpg", alt: "Chat interface" },
        { url: "/images/chat2.jpg", alt: "Group conversation" }
      ]
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;