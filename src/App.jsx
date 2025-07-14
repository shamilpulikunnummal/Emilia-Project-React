import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;

