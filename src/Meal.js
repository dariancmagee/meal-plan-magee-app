import React, {useState, useEffect} from 'react';

const mealKey = '4d3f246f2f71445ea8ca44032ed321c2'

export default function Meal({meal}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${mealKey}&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id])
    return (
    <article>
        <h2>{meal.title}</h2>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
    );
}