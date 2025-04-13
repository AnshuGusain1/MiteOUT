import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Prototypes } from "./components/sections/Prototypes";
import { Projects } from "./components/sections/Projects";
import { Awards } from "./components/sections/Awards";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename={import.meta.env.VITE_BASE_PATH || '/MiteOUT'}>
      <div className="min-h-screen bg-black text-gray-100">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prototypes" element={<Prototypes />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;