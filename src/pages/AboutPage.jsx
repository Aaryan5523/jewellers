import React, { useEffect } from 'react';
import About from '../components/About';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page" style={{ paddingTop: '80px' }}>
            <AnimatedSection>
                <About />
            </AnimatedSection>

            <AnimatedSection>
                <section className="section-padding">
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 className="serif" style={{ fontSize: '2.5rem' }}>Our Craftsmanship</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-grey)', maxWidth: '800px', margin: '0 auto', marginTop: '20px' }}>
                                From the initial sketch to the final polish, every piece of jewellery at Jayesh Jewellers undergoes a meticulous creation process. Our artisans combine time-honoured techniques with cutting-edge technology to bring our designs to life.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', textAlign: 'center' }}>
                            <div>
                                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Design & Artistry</h3>
                                <p style={{ color: 'var(--text-grey)', lineHeight: '1.8' }}>
                                    Our design process begins with an inspiration, which is then translated into a detailed sketch. We focus on creating balanced, beautiful designs that are both classic and contemporary.
                                </p>
                            </div>
                            <div>
                                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Gemstone Selection</h3>
                                <p style={{ color: 'var(--text-grey)', lineHeight: '1.8' }}>
                                    We travel the world to source the most exceptional gemstones. Each stone is carefully selected for its colour, clarity, and cut to ensure it meets our high standards of quality.
                                </p>
                            </div>
                            <div>
                                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Setting & Finishing</h3>
                                <p style={{ color: 'var(--text-grey)', lineHeight: '1.8' }}>
                                    Our master jewellers hand-set each gemstone and polish the final piece to perfection. This attention to detail ensures that your jewellery will be cherished for generations to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
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
            </AnimatedSection>
        </div>
    );
};

export default AboutPage;
