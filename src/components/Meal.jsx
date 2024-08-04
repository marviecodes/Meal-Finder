import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MealContext from "../context/MealContext";
import "./Meal.css";
import MealList from "./MealList";
import Spinner from "../shared/Spinner";

const Meal = () => {
  const { getMeals, meals } = useContext(MealContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    getMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="mp-container">
      <div className="img-div">
        <img
          src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
          className="meal-img"
        />
      </div>

      <div className="mp-home pt-three">
        <h1 className="mp-hero-text text-center">
          Here are some awesome suggestions
        </h1>
        {/* <p className="try text-center">Try these awesome delicacies out</p> */}
        <div className="meal-grid-container grid grid-cols-3">
          {meals.map((meal) => (
            <MealList meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meal;
