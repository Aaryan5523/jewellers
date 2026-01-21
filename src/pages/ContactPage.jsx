import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page" style={{ paddingTop: '100px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p className="subtitle gold-text">Get In Touch</p>
                    <h1 className="serif" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Visit Our Boutique</h1>
                    <p style={{ color: 'var(--text-grey)', maxWidth: '700px', margin: '0 auto' }}>
                        Whether you're looking for a bespoke creation or need assistance with our collections,
                        our experts are here to help. Contact us or visit our flagship store for a personalised consultation.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    marginBottom: '80px'
                }}>
                    {/* Contact Form */}
                    <div style={{ backgroundColor: '#fff', padding: '40px', border: '1px solid var(--border-color)' }}>
                        <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Send us a Message</h3>
                        <form style={{ display: 'grid', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>First Name</label>
                                    <input type="text" style={inputStyle} />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Last Name</label>
                                    <input type="text" style={inputStyle} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                                <input type="email" style={inputStyle} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                                <textarea placeholder="How can we help you?" style={{ ...inputStyle, height: '150px', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn" style={{ width: '100%', marginTop: '10px' }}>Send Message</button>
                        </form>
                    </div>

                    {/* Store Info */}
                    <div style={{ display: 'grid', gap: '40px' }}>
                        <div>
                            <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Contact Details</h3>
                            <div style={{ display: 'grid', gap: '25px' }}>
                                <div style={infoItemStyle}>
                                    <MapPin size={24} className="gold-text" />
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Store Location</p>
                                        <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>Behind the old railway station, <br /> Nawagam (Ghed), next to Keshubhai's hotel, Jamnagar.</p>
                                    </div>
                                </div>
                                <div style={infoItemStyle}>
                                    <Phone size={24} className="gold-text" />
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Call Us</p>
                                        <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>+91 70165 79063</p>
                                    </div>
                                </div>
                                <div style={infoItemStyle}>
                                    <Mail size={24} className="gold-text" />
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Email Support</p>
                                        <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>Dhruvraninga37@gmail.com</p>
                                    </div>
                                </div>
                                <div style={infoItemStyle}>
                                    <Clock size={24} className="gold-text" />
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Business Hours</p>
                                        <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>
                                            Mon - Sat : 10:00 AM - 7:00 PM<br />
                                            Sun : Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid var(--border-color)',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem'
};

const infoItemStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
};

export default ContactPage;
