import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesNavbar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch categories from the API
    axios.get('https://dummyjson.com/products/category-list')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <nav style={{ backgroundColor: '#000', padding: '10px 20px', borderRadius: '8px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
        {categories.map((category, index) => (
          <li key={index} style={{ margin: '0 15px' }}>
            <a
              href={`/category/${category}`}
              style={{
                textDecoration: 'none',
                color: '#FFD700', // Gold color
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.target.style.color = '#FFF')} // White on hover
              onMouseOut={(e) => (e.target.style.color = '#FFD700')} // Back to gold
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoriesNavbar;