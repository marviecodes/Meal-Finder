import "./MealList.css";
// import { LuMinusCircle } from "react-icons/lu";

const MealList = ({ meal }) => {
  return (
    <div className="card">
      <img src={meal.image} alt="meal" className="meallist-img" />
      <div className="card-content">
        <h5>{meal.title}</h5>

        <p>Additional ingredients</p>

        <div className="btn-info-container">
          {meal.missedIngredients.map((ing) => (
            <div className="missed-con">
              <span className="btn-missed">{ing.name}</span>
            </div>
          ))}
        </div>

        {/* <ul>
          {meal.missedIngredients.map((ing) => (
            <li>
              {" "}
              <span>
                <LuMinusCircle />
              </span>
              <span className="ing-name">{ing.name}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default MealList;
