import { createContext, useState } from "react";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [meals, setMeals] = useState([]);

  const final_recipes = recipes.map((recipe) => recipe.ingredient);
  const queryString = `${final_recipes.join(",+")}`;

  const handleAddRecipes = (recipe) => {
    setRecipes([recipe, ...recipes]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const clearRecipes = () => {
    setRecipes([]);
  };

  const APIKEY = `5b763d96681e4afe85e042795c82fd62`;
  const num = 30;
  //   Get Meals
  const getMeals = async () => {
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&number=${num}&apiKey=${APIKEY}`
      );
      const data = await res.json();
      console.log(data);
      setMeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <MealContext.Provider
      value={{
        recipes,
        meals,
        handleAddRecipes,
        handleDeleteRecipe,
        getMeals,
        clearRecipes,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
