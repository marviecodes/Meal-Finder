import { TiDeleteOutline } from "react-icons/ti";
import "./Ingredients.css";
import { useContext } from "react";
import MealContext from "../context/MealContext";

const Ingredients = ({ recipe }) => {
  const { handleDeleteRecipe } = useContext(MealContext);
  return (
    <div className="grid-container">
      <div>
        <button>
          <span className="span-text">{recipe.ingredient}</span>
        </button>
        <span
          className="del-icon"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete?")) {
              handleDeleteRecipe(recipe.id);
            }
          }}
        >
          <TiDeleteOutline />
        </span>
      </div>
    </div>
  );
};

export default Ingredients;
