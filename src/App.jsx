import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import './components/animations.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><Home /><Footer /><WhatsAppButton /></>} />
          <Route path="/shop" element={<><Navbar /><Shop /><Footer /><WhatsAppButton /></>} />
          <Route path="/about" element={<><Navbar /><AboutPage /><Footer /><WhatsAppButton /></>} />
          <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /><WhatsAppButton /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
