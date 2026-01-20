import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data';

const Collections = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section id="collections" className="section-padding container">
            <div className="text-center mb-60">
                <p className="subtitle gold-text">Selection</p>
                <h2 className="serif" style={{ fontSize: '3rem' }}>Our Signature Collection</h2>

                <div className="filter-nav">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            <div className="view-all-container text-center mt-60">
                <Link to="/shop" className="btn btn-outline">View All Products</Link>
            </div>

            <style jsx>{`
                .view-all-container {
                    margin-top: 60px;
                }
                .filter-nav {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 40px;
                }

                .filter-btn {
                    background: none;
                    border: none;
                    font-family: var(--font-sans);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--text-grey);
                    cursor: pointer;
                    padding: 5px 0;
                    position: relative;
                    transition: var(--transition);
                }

                .filter-btn::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--primary-gold);
                    transition: var(--transition);
                }

                .filter-btn.active {
                    color: var(--charcoal);
                }

                .filter-btn.active::after {
                    width: 100%;
                }

                .filter-btn:hover {
                    color: var(--charcoal);
                }

                @media (max-width: 768px) {
                    .filter-nav {
                        gap: 20px;
                        overflow-x: auto;
                        padding-bottom: 10px;
                        justify-content: flex-start;
                    }
                }
            `}</style>
        </section>
    );
};

export default Collections;
