import React, { useEffect, useState } from 'react';
import { getRecipeById } from '../services/api';
import { useParams } from 'react-router-dom';

interface Recipe {
  id: number;
  name: string;
  instructions: string;
  ingredients: string[];
  image: string;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeById(Number(id));
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <img src={recipe.image} alt={recipe.name} />
      <h1>{recipe.name}</h1>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
