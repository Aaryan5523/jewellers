import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import CONFIG from '../config';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${CONFIG.API_URL}/products`);
            setProducts(response.data.products || []);
        } catch (err) {
            console.error('Failed to fetch products:', err);
            setError('Failed to load products. Make sure the backend server is running.');
        } finally {
            setLoading(false);
        }
    };

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    if (loading) {
        return (
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: 'var(--text-grey)'
            }}>
                Loading products...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '16px'
            }}>
                <p style={{ color: '#c00', fontSize: '1.1rem' }}>{error}</p>
                <button onClick={fetchProducts} className="btn">Retry</button>
            </div>
        );
    }

    return (
        <section className="section-padding container">
            <div className="text-center mb-60">
                <p className="subtitle gold-text">Our Collection</p>
                <h2 className="serif" style={{ fontSize: '3rem' }}>Exquisite Pieces</h2>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '50px',
                flexWrap: 'wrap'
            }}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            padding: '12px 30px',
                            background: selectedCategory === category ? 'var(--gradient-gold)' : 'transparent',
                            color: selectedCategory === category ? 'white' : 'var(--charcoal)',
                            border: selectedCategory === category ? 'none' : '2px solid var(--border-color)',
                            borderRadius: '30px',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                            boxShadow: selectedCategory === category ? 'var(--shadow-gold)' : 'none'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {filteredProducts.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: 'var(--text-grey)'
                }}>
                    <p style={{ fontSize: '1.1rem' }}>No products found in this category.</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                        Add products from the admin panel.
                    </p>
                </div>
            ) : (
                <div className="product-grid">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} {...product} index={index} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Shop;
