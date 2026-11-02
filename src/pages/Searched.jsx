import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { fallbackRecipes } from "../data/recipes";

function Searched() {
  const params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState(fallbackRecipes);
  const getSearched = async (name) => {
    try {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&query=${name}`);
      if (!api.ok) return;
      const recipes = await api.json();
      setSearchedRecipes(recipes.results || []);
    } catch {
      setSearchedRecipes(fallbackRecipes);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <main className="listing-page">
      <header className="listing-header">
        <h1>“{params.search}”</h1>
        <p>Recipes and ideas matching your search, ready to make your own.</p>
      </header>
      <div className="recipe-grid">
        {searchedRecipes.length ? searchedRecipes.map((item, index) => (
          <RecipeCard key={item.id} recipe={item} index={index} />
        )) : <div className="empty-state">No recipes found. Try another ingredient or dish.</div>}
      </div>
    </main>
  );
}
export default Searched;
