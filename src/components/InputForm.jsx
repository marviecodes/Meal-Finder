import { useState } from "react";
import "./InputForm.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import MealContext from "../context/MealContext";

const InputForm = () => {
  const [ingredient, setIngredient] = useState("");
  const { handleAddRecipes } = useContext(MealContext);

  const id = uuidv4();

  const handleChange = (e) => {
    e.preventDefault();

    if (ingredient !== "") {
      const newIngObj = { ingredient, id };
      handleAddRecipes(newIngObj);
      setIngredient("");
    }
  };

  return (
    <form onSubmit={handleChange}>
      <h2></h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button type="submit" className={ingredient && "color-w-b-b"}>
          <span className="form-btn">Go</span>
        </button>
      </div>
    </form>
  );
};

export default InputForm;
