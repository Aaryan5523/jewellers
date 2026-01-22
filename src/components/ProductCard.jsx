import React, { useEffect, useRef, useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, category, description, details, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`product-card ${isVisible ? 'fade-in' : ''}`}
            ref={cardRef}
            style={{
                opacity: isVisible ? 1 : 0,
                animationDelay: `${index * 0.2}s`
            }}
        >
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                {details && details.length > 0 && (
                    <ul className="product-details">
                        {details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
