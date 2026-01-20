import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="about-grid">
                    <div>
                        <p className="subtitle gold-text">Our Heritage</p>
                        <h2 className="serif" style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '30px' }}>
                            A Century of Defined Brilliance
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-grey)', marginBottom: '30px' }}>
                            Jayesh Jewellers has been at the forefront of luxury jewellery for decades. Every piece in our collection is a testament to the skill of our master craftsmen.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-grey)', marginBottom: '40px' }}>
                            We believe that jewellery is more than just an accessory; it's a legacy. That's why we use only the finest, ethically sourced diamonds and gemstones, set in recycled precious metals.
                        </p>
                        <button className="btn btn-outline">Read more about us</button>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            height: '600px',
                            backgroundColor: '#f5f5f5',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1573408302185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000"
                                alt="Craftsmanship"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="about-badge">
                            <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Hand-Finished</h3>
                            <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>Every single stone is hand-set by our master jewellers to ensure perfection from every angle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
