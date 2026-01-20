import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page" style={{ paddingTop: '80px' }}>
            <About />

            <section className="section-padding" style={{ backgroundColor: '#fafafa' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-grey)', lineHeight: '1.8' }}>
                            At Jayesh Jewellers, our mission is to create timeless pieces that tell a story.
                            We combine traditional craftsmanship with modern design to deliver unique jewellery
                            that celebrates life's most precious moments. Our commitment to quality and
                            ethical sourcing ensures that every piece is as beautiful as it is responsible.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
