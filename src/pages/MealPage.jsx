import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import { Typed } from "react-typed";
import "./MealPage.css";

const MealPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="ap">
      <div className="img-div">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
          className="meal-img"
        />
      </div>
      <div className="home text-center pt-three">
        <h1 className="mp-hero-text">
          Kindly enter ingredients that are available right now
        </h1>
      </div>
    </div>
  );
};

export default MealPage;
