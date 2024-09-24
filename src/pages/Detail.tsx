import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../services/api';  // Import the API function
import { useParams } from 'react-router-dom';  // Hook to access route parameters
import '../css/home.css';

interface Recipe {
  id: number;
  name: string;
  instructions: string;
  ingredients: string[];
  image: string;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Get the dynamic id from the URL
  const [recipe, setRecipe] = useState<Recipe | null>(null);  // Recipe state

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(Number(id));  // Fetch recipe by id
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
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
   <div className='details'>
   <div>
   <h1>{recipe.name}</h1>
   <p>{recipe.instructions}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    
      
   </div>
   <img src={recipe.image} alt={recipe.name} />
  
   </div>
     
      
    </div>
  );
};

export default RecipeDetail;

  