import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { LogOut, Package, Mail, Plus, Edit, Trash2, X } from 'lucide-react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showProductForm, setShowProductForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const apiClient = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
    });

    useEffect(() => {
        if (activeTab === 'products') {
            fetchProducts();
        } else {
            fetchContacts();
        }
    }, [activeTab]);

    const fetchProducts = async () => {
        try {
            const response = await apiClient.get('/products');
            setProducts(response.data.products || []);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const fetchContacts = async () => {
        try {
            const response = await apiClient.get('/contacts');
            setContacts(response.data.contacts || []);
        } catch (error) {
            console.error('Failed to fetch contacts:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        navigate('/admin/login');
    };

    const handleDeleteProduct = async (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;

        try {
            await apiClient.delete(`products/${id}`);
            fetchProducts();
        } catch (error) {
            alert('Failed to delete product');
        }
    };

    const handleDeleteContact = async (id) => {
        if (!window.confirm('Delete this contact submission?')) return;

        try {
            await apiClient.delete(`/contacts/${id}`);
            fetchContacts();
        } catch (error) {
            alert('Failed to delete contact');
        }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)' }}>
            {/* Header */}
            <header style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                padding: '20px 0',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 className="serif" style={{
                            fontSize: '1.8rem',
                            background: 'var(--gradient-gold)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            Admin Dashboard
                        </h1>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-grey)', marginTop: '4px' }}>
                            Welcome, {adminUser.username}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            padding: '10px 20px',
                            background: 'var(--charcoal)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </header>

            {/* Tabs */}
            <div className="container" style={{ marginTop: '30px' }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '30px' }}>
                    {[
                        { id: 'products', label: 'Products', icon: Package },
                        { id: 'contacts', label: 'Contact Submissions', icon: Mail }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '12px 24px',
                                background: activeTab === tab.id ? 'var(--gradient-gold)' : 'white',
                                color: activeTab === tab.id ? 'white' : 'var(--charcoal)',
                                border: activeTab === tab.id ? 'none' : '1px solid #E8E8E8',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <tab.icon size={18} /> {tab.label}
                        </button>
                    ))}
                </div>

                {/* Products Tab */}
                {activeTab === 'products' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h2 className="serif" style={{ fontSize: '2rem' }}>Products</h2>
                            <button
                                onClick={() => { setEditingProduct(null); setShowProductForm(true); }}
                                className="btn"
                                style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                <Plus size={18} /> Add Product
                            </button>
                        </div>

                        {products.length === 0 ? (
                            <p style={{ textAlign: 'center', color: 'var(--text-grey)', padding: '40px' }}>
                                No products yet. Click "Add Product" to create one.
                            </p>
                        ) : (
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {products.map(product => (
                                    <div
                                        key={product.id}
                                        style={{
                                            background: 'white',
                                            padding: '20px',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            gap: '20px',
                                            alignItems: 'center',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                                        }}
                                    >
                                        {product.image && (
                                            <img
                                                src={`http://localhost:5000${product.image}`}
                                                alt={product.title}
                                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
                                            />
                                        )}
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{product.title}</h3>
                                            <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem' }}>
                                                {product.category}
                                            </p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button
                                                onClick={() => { setEditingProduct(product); setShowProductForm(true); }}
                                                style={{
                                                    padding: '8px 16px',
                                                    background: '#f0f0f0',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                <Edit size={16} /> Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProduct(product.id)}
                                                style={{
                                                    padding: '8px 16px',
                                                    background: '#fee',
                                                    color: '#c00',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Contacts Tab */}
                {activeTab === 'contacts' && (
                    <div>
                        <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '24px' }}>Contact Submissions</h2>
                        {contacts.length === 0 ? (
                            <p style={{ textAlign: 'center', color: 'var(--text-grey)', padding: '40px' }}>
                                No contact submissions yet.
                            </p>
                        ) : (
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {contacts.map(contact => (
                                    <div
                                        key={contact.id}
                                        style={{
                                            background: 'white',
                                            padding: '24px',
                                            borderRadius: '12px',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                                                    {contact.firstName} {contact.lastName}
                                                </h3>
                                                <p style={{ color: 'var(--text-grey)', fontSize: '0.9rem' }}>
                                                    {contact.email}
                                                </p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                                <span style={{
                                                    padding: '4px 12px',
                                                    background: contact.status === 'new' ? '#d4edda' : '#f0f0f0',
                                                    color: contact.status === 'new' ? '#155724' : '#666',
                                                    borderRadius: '6px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600'
                                                }}>
                                                    {contact.status}
                                                </span>
                                                <button
                                                    onClick={() => handleDeleteContact(contact.id)}
                                                    style={{
                                                        padding: '6px  12px',
                                                        background: '#fee',
                                                        color: '#c00',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        fontSize: '0.85rem'
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        <p style={{ color: 'var(--charcoal)', lineHeight: '1.6', marginTop: '12px' }}>
                                            {contact.message}
                                        </p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-grey)', marginTop: '12px' }}>
                                            {new Date(contact.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Product Form Modal */}
            {showProductForm && (
                <ProductFormModal
                    product={editingProduct}
                    onClose={() => { setShowProductForm(false); setEditingProduct(null); }}
                    onSuccess={() => { fetchProducts(); setShowProductForm(false); setEditingProduct(null); }}
                    apiClient={apiClient}
                />
            )}
        </div>
    );
};

// Product Form Modal Component
const ProductFormModal = ({ product, onClose, onSuccess, apiClient }) => {
    const [formData, setFormData] = useState({
        title: product?.title || '',
        price: product?.price || '',
        category: product?.category || 'Gold',
        description: product?.description || '',
        details: product?.details || [''],
        image: null
    });
    const [loading, setLoading] = useState(false);

    const handleDetailChange = (index, value) => {
        const newDetails = [...formData.details];
        newDetails[index] = value;
        setFormData({ ...formData, details: newDetails });
    };

    const addDetail = () => {
        setFormData({ ...formData, details: [...formData.details, ''] });
    };

    const removeDetail = (index) => {
        const newDetails = formData.details.filter((_, i) => i !== index);
        setFormData({ ...formData, details: newDetails });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('price', formData.price);
            data.append('category', formData.category);
            data.append('description', formData.description);
            data.append('details', JSON.stringify(formData.details.filter(d => d.trim())));

            if (formData.image) {
                data.append('image', formData.image);
            }

            if (product) {
                await apiClient.put(`/products/${product.id}`, data);
            } else {
                await apiClient.post('/products', data);
            }

            onSuccess();
        } catch (error) {
            alert('Failed to save product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '16px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                padding: '32px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <h2 className="serif">{product ? 'Edit Product' : 'Add Product'}</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            style={{ width: '100%', padding: '10px', border: '1px solid #E8E8E8', borderRadius: '8px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            style={{ width: '100%', padding: '10px', border: '1px solid #E8E8E8', borderRadius: '8px' }}
                        >
                            <option>Gold</option>
                            <option>Silver</option>
                            <option>Platinum 925</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Details</label>
                        {formData.details.map((detail, index) => (
                            <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                <input
                                    type="text"
                                    value={detail}
                                    onChange={(e) => handleDetailChange(index, e.target.value)}
                                    style={{ flex: 1, padding: '10px', border: '1px solid #E8E8E8', borderRadius: '8px' }}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeDetail(index)}
                                    style={{ padding: '10px', background: '#fee', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={addDetail} style={{ padding: '8px 16px', background: '#f0f0f0', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                            + Add Detail
                        </button>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                            style={{ width: '100%' }}
                        />
                        {product?.image && !formData.image && (
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-grey)', marginTop: '8px' }}>
                                Current: {product.image}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn"
                        disabled={loading}
                        style={{ width: '100%', marginTop: '8px' }}
                    >
                        {loading ? 'Saving...' : (product ? 'Update Product' : 'Create Product')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
