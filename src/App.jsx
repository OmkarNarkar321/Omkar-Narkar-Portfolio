import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StickyNavbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { LoadingScreen } from './Components/LoadingScreen';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <div className="min-h-screen bg-gray-50">
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;