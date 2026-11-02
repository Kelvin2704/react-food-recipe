import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RecipeCard from "./RecipeCard";
import { fallbackRecipes } from "../data/recipes";

function Veggie() {
  const [veggie, setVeggie] = useState([...fallbackRecipes].reverse());
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      try {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
        if (!api.ok) return;
        const data = await api.json();
        if (data.recipes?.length) {
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setVeggie(data.recipes);
        }
      } catch {
        setVeggie([...fallbackRecipes].reverse());
      }
    }
  };
  return (
    <section className="recipe-section">
      <div className="section-heading">
        <h2>From the garden</h2>
        <p>Plant-forward recipes with plenty of texture, colour and satisfying flavour.</p>
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
        {veggie.map((recipe, index) => {
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
export default Veggie;
