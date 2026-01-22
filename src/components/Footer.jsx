import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

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
                        <h4>Contact</h4>
                        <ul style={{ gap: '20px', display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <MapPin size={18} className="gold-text" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <a
                                    href="https://maps.google.com/?q=Behind+the+old+railway+station,+Nawagam,+Ghed,+Jamnagar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        color: '#d0d0d0',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseLeave={(e) => e.target.style.color = '#d0d0d0'}
                                >
                                    Behind the old railway station, Nawagam (Ghed), next to Keshubhai's hotel, Jamnagar.
                                </a>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <Phone size={18} className="gold-text" style={{ flexShrink: 0 }} />
                                <div style={{ fontSize: '0.9rem' }}>
                                    <a
                                        href="tel:+919909980682"
                                        style={{
                                            color: '#d0d0d0',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                            transition: 'color 0.3s ease',
                                            margin: '0',
                                            display: 'block',
                                            marginBottom: '5px'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'}
                                        onMouseLeave={(e) => e.target.style.color = '#d0d0d0'}
                                    >
                                        +91 99099 80682
                                    </a>
                                    <a
                                        href="tel:+917016579063"
                                        style={{
                                            color: '#d0d0d0',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                            transition: 'color 0.3s ease',
                                            margin: '0',
                                            display: 'block'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'}
                                        onMouseLeave={(e) => e.target.style.color = '#d0d0d0'}
                                    >
                                        +91 70165 79063
                                    </a>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <Mail size={18} className="gold-text" style={{ flexShrink: 0 }} />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Dhruvraninga37@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#d0d0d0',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseLeave={(e) => e.target.style.color = '#d0d0d0'}
                                >
                                    Dhruvraninga37@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
