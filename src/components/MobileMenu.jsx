import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/Awards", label: "Awards" },
    { to: "/Prototypes", label: "Prototypes" },
    { to: "/Projects", label: "Projects" },
    { to: "/Contact", label: "Contact" }
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "opacity-100 pointer-events-auto"
                         : "opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-gray-300 transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {menuItems.map((item, index) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 hover:text-gray-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                    ${menuOpen ? "animate-fadeInUp" : ""}
                    `}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: "both"
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};