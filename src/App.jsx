
import Navbar from './component/Navbar/Navbar';
import './App.css'
import Footer from './component/Footer/Footer';
import CategoriesNavbar from './component/Categories/CategoriesNavbar';
import ProductDisplay from './component/Products/ProductsDisplay';



export default function App() {


  return (
    <>
      <Navbar />
      <img className="Alibaba_img" src='src\assets\img\gold.webp' />


      <ProductDisplay />



      <Footer />

    </>

  );
}
