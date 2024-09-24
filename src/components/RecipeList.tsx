import React, { useEffect, useState } from 'react';
import { getRecipes } from '../services/api';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  name: string;
  image: string;
  category: string; 
  rating: number;
  cookTimeMinutes: number;
  mealType: string;
  tags:string;
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data.recipes);
      } catch (err) {
        setError('Failed to load recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
              <h3 className="tags">{recipe.tags}</h3>
              <div  className="recipe_name">
              <h3>{recipe.name}</h3>
              <h3 className="rating">Reviews:{recipe.rating}</h3>
              </div>
              <div  className="recipe_name">
              <h3 >{recipe.cookTimeMinutes} minutes</h3>
              <h3>{recipe.mealType}</h3>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
