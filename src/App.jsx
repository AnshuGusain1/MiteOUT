import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./App.css";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Prototypes } from "./components/sections/Prototypes";
import { Projects } from "./components/sections/Projects";
import { Awards } from "./components/sections/Awards";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from "react-helmet";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename={import.meta.env.VITE_BASE_PATH || '/MiteOUT'}>
      <div className="min-h-screen bg-black text-gray-100">
        <Helmet>
          <title>MiteOUT – Precision Beekeeping Solutions</title>
          <meta name="description" content="MiteOUT delivers real-time hive monitoring and alerts, empowering beekeepers to protect and optimize their hives." />
          <link rel="canonical" href="https://www.miteouttech.com/" />
        </Helmet>
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