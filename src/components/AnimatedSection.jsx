import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, animation = "fade-in" }) => {
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    return (
        <div
            ref={elementRef}
            className={`animated-section ${animation} ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
