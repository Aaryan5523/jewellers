import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Importing assets for the loop
import heroImg from '../assets/hero.png';
import braceletImg from '../assets/bracelet.png';
import earringsImg from '../assets/earrings.png';
import ringImg from '../assets/ring.png';

const Hero = () => {
    const images = [heroImg, braceletImg, earringsImg, ringImg];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero">
            <div className="hero-images">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="overlay"></div>
                    </div>
                ))}
            </div>

            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <p className="subtitle gold-text">Exquisite Craftsmanship</p>
                    <h1 className="serif">Elegance in <br /> Every Detail</h1>
                    <p className="description">
                        Discover our curated collection of fine jewellery, designed to celebrate life's most precious moments with timeless beauty and unmatched brilliance.
                    </p>
                    <div className="hero-btns">
                        <Link to="/shop" className="btn">Shop Collection</Link>
                        <Link to="/about" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Our Story</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
