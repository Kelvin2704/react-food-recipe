import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { fallbackRecipes } from "../data/recipes";

function Cuisine() {
  const [cuisine, setCuisine] = useState(fallbackRecipes);
  let params = useParams();
  const getCuisine = async (name) => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`);
      if (!api.ok) return;
      const recipes = await api.json();
      if (recipes.results?.length) setCuisine(recipes.results);
    } catch {
      setCuisine(fallbackRecipes);
    }
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);
  return (
    <main className="listing-page">
      <header className="listing-header">
        <h1>{params.type} kitchen</h1>
        <p>Explore recipes shaped by the ingredients, rituals and flavours of {params.type} cooking.</p>
      </header>
      <div className="recipe-grid">
        {cuisine.map((item, index) => <RecipeCard key={item.id} recipe={item} index={index} />)}
      </div>
    </main>
  );
}

export default Cuisine;
