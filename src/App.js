import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealPage from "./pages/MealPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealpage" element={<MealPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
