import { useState } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import productImg from './assets/product.jpg';
import UserCard from './components/userCard';
import ProductCard from './components/productCard';

function App() {
  return (
    <main>
      <UserCard />
      <ProductCard />
    </main>
  );
};

export default App;
