import React from 'react';
import RecipeList from '../components/RecipeList';
import '../css/home.css';

const Home: React.FC = () => (

 <div>
   <div className="hero_section">
         <h2>Food Dairy</h2>
   </div>
   <div>
   <div className="menu_home">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>
   </div>
    <RecipeList />
  </div>
);

export default Home;