import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import InputForm from "../components/InputForm";
import "./MealPage.css";
import Ingredients from "../components/Ingredients";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MealContext from "../context/MealContext";

const MealPage = () => {
  const [loading, setLoading] = useState(true);
  const { recipes, clearRecipes } = useContext(MealContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="mp-container">
      <div className="img-div">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
          className="meal-img"
        />
      </div>
      <div className="mp-home text-center pt-three">
        <div className="container">
          <h1 className="mp-hero-text">Let's find you an amazing recipe</h1>
          <InputForm />
          <div className="ingredients-container">
            <div className="grid-container">
              {recipes.map((recipe) => (
                <Ingredients recipe={recipe} key={recipe.id} />
              ))}
            </div>
          </div>
          <div className="fetch-btn-container">
            <Link to="/mealpage/suggestions">
              <button className="w-full color-w-b-b">
                <span className="meal-txt">Find meals</span>
              </button>
            </Link>
            <button className="color-w-b-b mr-2" onClick={clearRecipes}>
              <span className="meal-txt">Clear</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPage;
