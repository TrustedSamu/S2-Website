import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Documentation from './components/Documentation';
import ParticlesBackground from './components/ParticlesBackground';
import DetailedFeatures from './pages/DetailedFeatures';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <ParticlesBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<DetailedFeatures />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
