

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', credentials);

            // Store token in localStorage
            localStorage.setItem('adminToken', response.data.token);
            localStorage.setItem('adminUser', JSON.stringify(response.data.admin));

            // Redirect to admin dashboard
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
            padding: '20px'
        }}>
            <div style={{
                maxWidth: '450px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '24px',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                padding: '50px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Background */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Logo */}
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h1 className="serif" style={{
                            fontSize: '2.5rem',
                            marginBottom: '8px',
                            background: 'var(--gradient-gold)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            JAYESH
                        </h1>
                        <p style={{ fontSize: '0.85rem', letterSpacing: '3px', color: 'var(--text-grey)', marginBottom: '8px' }}>
                            JEWELLERS
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-grey)', marginTop: '20px' }}>
                            Admin Portal
                        </p>
                    </div>

                    {error && (
                        <div style={{
                            padding: '14px 18px',
                            marginBottom: '24px',
                            background: 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)',
                            color: '#721c24',
                            borderRadius: '12px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            animation: 'slideIn 0.3s ease'
                        }}>
                            ✗ {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '10px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: 'var(--charcoal)'
                            }}>
                                Username
                            </label>
                            <input
                                type="text"
                                value={credentials.username}
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                required
                                style={{
                                    width: '100%',
                                    padding: '14px 18px',
                                    border: '2px solid #E8E8E8',
                                    borderRadius: '12px',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'var(--font-sans)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-gold)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#E8E8E8';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '32px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '10px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                color: 'var(--charcoal)'
                            }}>
                                Password
                            </label>
                            <input
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                required
                                style={{
                                    width: '100%',
                                    padding: '14px 18px',
                                    border: '2px solid #E8E8E8',
                                    borderRadius: '12px',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'var(--font-sans)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--primary-gold)';
                                    e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#E8E8E8';
                                    e.target.style.boxShadow = 'none';
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn"
                            disabled={loading}
                            style={{
                                width: '100%',
                                opacity: loading ? 0.6 : 1,
                                cursor: loading ? 'not-allowed' : 'pointer',
                                padding: '16px'
                            }}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <p style={{
                        textAlign: 'center',
                        marginTop: '24px',
                        fontSize: '0.85rem',
                        color: 'var(--text-grey)'
                    }}>
                        Default: admin / admin123
                    </p>
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
            `}</style>
        </div>
    );
};

export default LoginPage;
