import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/MiteOutLogo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full left-0 z-40 bg-[rgba(40, 40, 40, 0.8)] backdrop-blur-lg shadow-md"> 
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/">
                        <img src={Logo} alt="MiteOut Logo" className="h-15" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            to="/" 
                            className="text-gray-300 hover:text-[rgb(247, 235, 232)] transition-colors"
                        > 
                            Home
                        </Link>
                        <Link 
                            to="/Awards" 
                            className="text-gray-300 hover:text-[rgb(247, 235, 232)] transition-colors"
                        > 
                            Awards
                        </Link>
                        <Link 
                            to="/About" 
                            className="text-gray-300 hover:text-[rgb(247, 235, 232)] transition-colors"
                        > 
                            About
                        </Link>
                        <Link 
                            to="/Contact" 
                            className="text-gray-300 hover:text-[rgb(247, 235, 232)] transition-colors"
                        > 
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
