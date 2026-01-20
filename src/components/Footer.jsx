import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h1 className="serif">JAYESH</h1>
                        <p>JEWELLERS</p>
                        <p>Crafting timeless elegance since 1924. Jayesh Jewellers represents a legacy of excellence and trust.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop">Product</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Care & Repairs</a></li>
                            <li><a href="#">Sizing Guide</a></li>
                            <li><a href="#">Book an Appointment</a></li>
                            <li><a href="#">Bespoke Design</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Connect</h4>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                            <Instagram size={20} className="icon" />
                            <Facebook size={20} className="icon" />
                            <Twitter size={20} className="icon" />
                            <Mail size={20} className="icon" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Jayesh Jewellers. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
