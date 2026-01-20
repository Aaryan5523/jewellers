import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="shop-page">
            <header className="shop-header">
                <div className="container text-center">
                    <p className="subtitle gold-text">The Collection</p>
                    <h1 className="serif">Discover Jayesh Jewellers</h1>
                </div>
            </header>

            <section className="section-padding container">
                <div className="filter-nav mb-60">
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

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            <style jsx>{`
                .shop-header {
                    padding: 160px 0 80px;
                    background-color: var(--soft-white);
                    border-bottom: 1px solid var(--border-color);
                }

                .shop-header h1 {
                    font-size: 3.5rem;
                    margin-top: 20px;
                }

                .filter-nav {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
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
                    .shop-header {
                        padding: 120px 0 60px;
                    }
                    .shop-header h1 {
                        font-size: 2.5rem;
                    }
                    .filter-nav {
                        gap: 20px;
                        overflow-x: auto;
                        padding-bottom: 10px;
                        justify-content: flex-start;
                    }
                }
            `}</style>
        </div>
    );
};

export default Shop;
