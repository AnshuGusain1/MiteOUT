import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MiteOutLogo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full left-0 z-50 bg-yellow-100/30 backdrop-blur-md shadow-md border-b border-yellow-200"> 
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/">
                        <img src={Logo} alt="MiteOut Logo" className="h-15" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button 
                        className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-yellow-800 text-2xl transition-colors duration-300 hover:text-yellow-900 focus:outline-none" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? "×" : "☰"}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className="text-yellow-800 transition-colors duration-300 hover:text-yellow-900 hover:-translate-y-1 transform"
                        > 
                            Home
                        </Link>
                        <Link 
                            to="/Awards" 
                            className="text-yellow-800 transition-colors duration-300 hover:text-yellow-900 hover:-translate-y-1 transform"
                        > 
                            Awards
                        </Link>
                        <Link 
                            to="/Prototypes" 
                            className="text-yellow-800 transition-colors duration-300 hover:text-yellow-900 hover:-translate-y-1 transform"
                        > 
                            Prototypes
                        </Link>
                        <Link 
                            to="/Projects" 
                            className="text-yellow-800 transition-colors duration-300 hover:text-yellow-900 hover:-translate-y-1 transform"
                        > 
                            Projects
                        </Link>
                        <Link 
                            to="/Contact" 
                            className="text-yellow-800 transition-colors duration-300 hover:text-yellow-900 hover:-translate-y-1 transform"
                        > 
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};