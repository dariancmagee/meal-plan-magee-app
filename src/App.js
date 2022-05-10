import React, {useState} from 'react';
import MealList from "./MealList";

const mealKey = '4d3f246f2f71445ea8ca44032ed321c2'

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${mealKey}&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });

  }

  return (
    <div className="App">
      <h1>Meal Plan Magee</h1>
      <section className="controls">
        <input 
        type="number"
        placeholder="Calories (e.g. 2000)"
        onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
