import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } else {
                setError(data.error || 'Failed to send message. Please try again or contact us directly.');
            }
        } catch (err) {
            setError('Failed to connect to server. Make sure the backend is running.');
            console.error('Email send error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page" style={{ paddingTop: '100px', background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p className="subtitle gold-text" style={{ fontSize: '0.9rem', letterSpacing: '3px', fontWeight: '700' }}>Get In Touch</p>
                    <h1 className="serif" style={{ fontSize: '3.8rem', marginBottom: '24px', fontWeight: '700' }}>Visit Our Boutique</h1>
                    <p style={{ color: 'var(--text-grey)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Whether you're looking for a bespoke creation or need assistance with our collections,
                        our experts are here to help. Contact us or visit our flagship store for a personalised consultation.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '50px',
                    marginBottom: '100px'
                }}>
                    {/* Premium Contact Form */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        padding: '50px',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderRadius: '24px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Decorative gradient background */}
                        <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-50%',
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}></div>

                        <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '35px', fontWeight: '700', position: 'relative', zIndex: 1 }}>Send us a Message</h3>

                        {submitted && (
                            <div style={{
                                padding: '18px 24px',
                                marginBottom: '24px',
                                background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
                                color: '#155724',
                                border: '1px solid #c3e6cb',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                animation: 'slideIn 0.5s ease',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>✓</span>
                                Message sent successfully! We'll get back to you soon.
                            </div>
                        )}

                        {error && (
                            <div style={{
                                padding: '18px 24px',
                                marginBottom: '24px',
                                background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
                                color: '#721c24',
                                border: '1px solid #f5c6cb',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                animation: 'slideIn 0.5s ease',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <span style={{ fontSize: '1.2rem' }}>✗</span>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px', position: 'relative', zIndex: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--charcoal)' }}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            ...inputStyle,
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--charcoal)' }}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            ...inputStyle,
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--charcoal)' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        ...inputStyle,
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--charcoal)' }}>Message</label>
                                <textarea
                                    placeholder="How can we help you?"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        ...inputStyle,
                                        height: '160px',
                                        resize: 'vertical',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    marginTop: '10px',
                                    opacity: loading ? 0.6 : 1,
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    fontSize: '0.9rem',
                                    padding: '18px 40px',
                                    fontWeight: '700'
                                }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information Cards */}
                    <div style={{ display: 'grid', gap: '24px', alignContent: 'start' }}>
                        <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: '700' }}>Contact Details</h3>

                        <div style={contactCardStyle}>
                            <div style={iconWrapperStyle}>
                                <MapPin size={24} style={{ color: '#D4AF37' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', marginBottom: '8px', fontSize: '1.05rem', color: 'var(--charcoal)' }}>Store Location</p>
                                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    Behind the old railway station, <br /> Nawagam (Ghed), next to Keshubhai's hotel, Jamnagar.
                                </p>
                            </div>
                        </div>

                        <div style={contactCardStyle}>
                            <div style={iconWrapperStyle}>
                                <Phone size={24} style={{ color: '#D4AF37' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', marginBottom: '8px', fontSize: '1.05rem', color: 'var(--charcoal)' }}>Call Us</p>
                                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem', marginBottom: '4px' }}>+91 99099 80682</p>
                                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>+91 70165 79063</p>
                            </div>
                        </div>

                        <div style={contactCardStyle}>
                            <div style={iconWrapperStyle}>
                                <Mail size={24} style={{ color: '#D4AF37' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', marginBottom: '8px', fontSize: '1.05rem', color: 'var(--charcoal)' }}>Email Support</p>
                                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem' }}>Dhruvraninga37@gmail.com</p>
                            </div>
                        </div>

                        <div style={contactCardStyle}>
                            <div style={iconWrapperStyle}>
                                <Clock size={24} style={{ color: '#D4AF37' }} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', marginBottom: '8px', fontSize: '1.05rem', color: 'var(--charcoal)' }}>Business Hours</p>
                                <p style={{ color: 'var(--text-grey)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    Mon - Sat : 10:00 AM - 7:00 PM<br />
                                    Sun : Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    border-color: var(--primary-gold) !important;
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1) !important;
                    outline: none !important;
                }

                @media (max-width: 768px) {
                    .contact-page > .container > div:first-of-type > h1 {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    border: '2px solid #E8E8E8',
    outline: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    backgroundColor: '#ffffff',
    color: 'var(--charcoal)',
    fontWeight: '500'
};

const contactCardStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    padding: '28px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid rgba(232, 232, 232, 0.8)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s ease',
    cursor: 'default'
};

const iconWrapperStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(197, 160, 89, 0.05) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    border: '1px solid rgba(212, 175, 55, 0.2)'
};

export default ContactPage;
