import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Number of products per page

    // Fetch all products and categories
    useEffect(() => {
        // Fetch categories
        axios.get('https://dummyjson.com/products/category-list')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                setError(error.message);
            });

        // Fetch all products
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products);
                setFilteredProducts(response.data.products); // Initially show all products
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Filter products based on the selected category
    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === selectedCategory);
            setFilteredProducts(filtered);
        }
        setCurrentPage(1); // Reset to the first page when category changes
    }, [selectedCategory, products]);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ color: '#FFD700', textAlign: 'center' }}>All Products</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#000', color: '#FFD700' }}
                >
                    <option value="all">All Categories</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {currentProducts.map(product => (
                    <div
                        key={product.id}
                        style={{
                            backgroundColor: '#000',
                            color: '#FFD700',
                            padding: '15px',
                            borderRadius: '8px',
                            width: '250px',
                            textAlign: 'center',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                        <p style={{ color: '#FFF' }}>Rating: {product.rating}</p>
                        <p style={{ color: '#FFF' }}>Category: {product.category}</p>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        style={{
                            margin: '0 5px',
                            padding: '10px 15px',
                            backgroundColor: currentPage === index + 1 ? '#FFD700' : '#000',
                            color: currentPage === index + 1 ? '#000' : '#FFD700',
                            border: '1px solid #FFD700',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;

