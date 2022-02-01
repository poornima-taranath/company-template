import React from 'react';
import './index.css';
import Home from './pages/Home';
import Requirement from './pages/Requirement';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Test from './pages/Test';
import Info from './pages/Info';

function App() {
  return (
    <div>
      <Home />
      <Features />
      <Requirement />
      <Info />
      <Test />
      <Footer />
    </div>
  );
}

export default App;
