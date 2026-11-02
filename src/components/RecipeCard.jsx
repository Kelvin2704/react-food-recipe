import { FiClock, FiHeart, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { foodImages } from "../data/recipes";

function RecipeCard({ recipe, index = 0 }) {
  const image = recipe.image || foodImages[index % foodImages.length];

  return (
    <article className="recipe-card">
      <Link className="recipe-card-link" to={`/recipe/${recipe.id}`}>
        <div className="recipe-image-wrap">
          <img src={image} alt={recipe.title} />
          <span className="favorite-button" aria-label="Save recipe">
            <FiHeart />
          </span>
        </div>
        <div className="recipe-card-content">
          <span className="recipe-card-kicker">{recipe.category || "Chef's choice"}</span>
          <h3>{recipe.title}</h3>
          <div className="recipe-meta">
            <span><FiClock /> {recipe.readyInMinutes || 30} min</span>
            <span><FiUsers /> {recipe.servings || 2}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default RecipeCard;
