import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine if we should be solid (e.g. on shop page)
    const isSolid = isScrolled || location.pathname !== '/';

    return (
        <nav className={`navbar ${isSolid ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-content">
                <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} color={isSolid ? 'var(--charcoal)' : 'white'} /> : <Menu size={24} color={isSolid ? 'var(--charcoal)' : 'white'} />}
                </div>

                <Link to="/" className="logo">
                    <h1 className="serif">JAYESH</h1>
                    <p>JEWELLERS</p>
                </Link>

                <ul className="nav-links desktop-only">
                    <li><NavLink to="/" end className={({ isActive }) => (isActive && !location.hash ? 'active-link' : '')}>Home</NavLink></li>
                    <li><NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : '')}>Product</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Us</NavLink></li>
                </ul>
            </div>

            <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    <li><NavLink to="/" end onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive && !location.hash ? 'active-link' : '')}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>Product</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

