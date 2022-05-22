
import './App.css';
import About from './pages/About';

import Home from './pages/Home';
import Product from './pages/Product';
import Header from './component/Header';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Footer from './component/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
