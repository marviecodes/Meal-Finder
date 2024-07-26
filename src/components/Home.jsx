import "./Home.css";
import Gif from "./Gif";

const Home = () => {
  const handleClick = () => {
    window.location = "/mealpage";
  };
  return (
    <div className="home text-center pt-nine">
      <div className="container">
        <h1 className="hero-text">Hey there hungry champ!!!</h1>
        <p className="description">don't know what to cook today?</p>
        <Gif />
        <div className="btn-container">
          <button onClick={handleClick}>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
