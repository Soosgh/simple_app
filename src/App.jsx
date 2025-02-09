import { useEffect, useState } from 'react';
import { Categories } from './component/Categories/Categories';
import { Navbar } from './component/Navbar/Navbar';
import { Products } from './component/Products/Products';
import { ProductDetails } from './component/ProductDetails/ProductDetails';
import { Footer } from './component/Footer/Footer';


export default function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 5)));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}></div>
      <Categories categories={categories} onCategoryClick={handleCategoryClick} />
      {selectedCategory && <Products products={products} onProductClick={setSelectedProduct} />}
      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      <Footer />
    </div>
  );
}
