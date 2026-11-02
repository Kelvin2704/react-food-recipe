import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
import { fallbackRecipes } from "../data/recipes";

function Popular() {
  const [popular, setPopular] = useState(fallbackRecipes);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`);
        if (!api.ok) return;
        const data = await api.json();
        if (data.recipes?.length) {
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
        }
      } catch {
        setPopular(fallbackRecipes);
      }
    }
  };

  return (
    <section className="recipe-section">
      <div className="section-heading">
        <h2>Most loved</h2>
        <p>Comforting favourites and vibrant new ideas, selected for everyday cooking.</p>
      </div>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1.5rem",
          breakpoints: {
            980: { perPage: 3 },
            700: { perPage: 2 },
            460: { perPage: 1, gap: "1rem" },
          },
        }}
      >
        {popular.map((recipe, index) => {
          return (
            <SplideSlide key={recipe.id}>
              <RecipeCard recipe={recipe} index={index} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}

export default Popular;
