import axios from 'axios';

export const getRecipes = async () => {
  const response = await axios.get('https://dummyjson.com/recipes');
  return response.data;
};

export const getRecipeById = async (id: number) => {
  const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
  return response.data;
};