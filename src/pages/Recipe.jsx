import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock, FiHeart, FiStar, FiUsers } from "react-icons/fi";
import { fallbackDetail } from "../data/recipes";

function Recipe() {
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(fallbackDetail);
  const [activeTab, setActiveTab] = useState("ingredients");

  useEffect(() => {
    let active = true;

    const getRecipeDetails = async () => {
      try {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        if (!api.ok) return;
        const data = await api.json();
        if (active && data?.title) setDetails({ ...fallbackDetail, ...data });
      } catch {
        if (active) setDetails(fallbackDetail);
      }
    };

    getRecipeDetails();
    return () => {
      active = false;
    };
  }, [params.name]);

  const ingredients = details.extendedIngredients?.length ? details.extendedIngredients : fallbackDetail.extendedIngredients;
  const apiSteps = details.analyzedInstructions?.[0]?.steps?.map((step) => step.step);
  const steps = apiSteps?.length ? apiSteps : details.steps || fallbackDetail.steps;

  return (
    <main className="recipe-detail-page">
      <article className="detail-shell">
        <div className="detail-media">
          <img src={details.image || fallbackDetail.image} alt={details.title} />
          <button className="detail-icon-button detail-back" onClick={() => navigate(-1)} aria-label="Go back">
            <FiArrowLeft />
          </button>
          <button className="detail-icon-button detail-favorite" aria-label="Save recipe">
            <FiHeart />
          </button>
          <div className="detail-image-caption">
            <span>Today’s table</span>
            <strong>Fresh, generous, uncomplicated.</strong>
          </div>
        </div>

        <div className="detail-content">
          <span className="eyebrow">Recipe of the day</span>
          <h1 className="detail-title">{details.title}</h1>
          <p className="detail-author">A recipe by {details.sourceName || "The Savory Kitchen"}</p>

          <div className="detail-stats">
            <div className="stat-card">
              <FiClock />
              <div><strong>{details.readyInMinutes || 35} min</strong><span>Total time</span></div>
            </div>
            <div className="stat-card">
              <FiUsers />
              <div><strong>{details.servings || 2} servings</strong><span>At the table</span></div>
            </div>
            <div className="stat-card">
              <FiStar />
              <div><strong>{details.healthScore ? `${Math.round(details.healthScore)}%` : "4.9 / 5"}</strong><span>Community love</span></div>
            </div>
          </div>

          <div className="detail-tabs" role="tablist" aria-label="Recipe content">
            <button
              className={`detail-tab ${activeTab === "ingredients" ? "active" : ""}`}
              onClick={() => setActiveTab("ingredients")}
              role="tab"
              aria-selected={activeTab === "ingredients"}
            >
              Ingredients
            </button>
            <button
              className={`detail-tab ${activeTab === "directions" ? "active" : ""}`}
              onClick={() => setActiveTab("directions")}
              role="tab"
              aria-selected={activeTab === "directions"}
            >
              Directions
            </button>
          </div>

          {activeTab === "ingredients" ? (
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li className="ingredient-row" key={`${ingredient.id || index}-${index}`}>
                  <span className="ingredient-grip">≡</span>
                  <span className="ingredient-name">{ingredient.name || ingredient.original}</span>
                  <span className="ingredient-amount">
                    {ingredient.amount && ingredient.unit ? `${ingredient.amount} ${ingredient.unit}` : `0${index + 1}`}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="directions-list">
              {steps.map((step, index) => (
                <div className="direction-step" key={index}>
                  <span>Step {index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}

export default Recipe;
