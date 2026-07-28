import { useState } from 'react';
import './App.css';
import profileImg from './assets/profile.jpg';
import productImg from './assets/product.jpg';
import UserCard from './components/userCard';
import ProductCard from './components/productCard';


// const user = {
//   name: 'Kranti Pariyar',
//   role: 'Backend Developer',
//   bio: 'Learning HTML, CSS, React for develop website',
// };

function App() {
  return (
    <main>
      {/* <UserCard user={user}/> */}
      <UserCard user={{name: 'Surakshya Khatri', role: 'Frontend Developer', bio: 'Learning HTML, CSS, React for develop website'}} />
      <ProductCard product={{name: 'CD Icon T-Shirt', money: 2999, description: 'Crafted in Italy from high-end 100% cotton jersey, offering a heavyweight feel that remains incredibly soft and breathable on the skin.'}}/>
    </main>
  );
};

export default App;

// todo: children props
