import '../src/custom.scss';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Navbar from './views/Navbar';
import Products from './views/Products';
import About from './views/About';
import Checkout from './views/Checkout';
import Footer from './views/Footer';
import { DataProvider } from './hooks/DataContext';

function App() {
  return (
    <DataProvider>
      <Navbar />
      <div className="box"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
