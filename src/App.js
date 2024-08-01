import React, { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealPage from "./pages/MealPage";
import Meal from "./components/Meal";
import { MealProvider } from "./context/MealContext";

const App = () => {
  return (
    <>
      <MealProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mealpage" element={<MealPage />} />
              <Route path="/mealpage/suggestions" element={<Meal />} />
            </Routes>
          </div>
        </Router>
      </MealProvider>
    </>
  );
};

export default App;
