import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { FiArrowDown, FiHeart } from "react-icons/fi";
import { foodImages } from "../data/recipes";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <span className="eyebrow">Seasonal recipes</span>
          <h1>Food worth <em>slowing down</em> for.</h1>
          <p>Simple, generous recipes designed for real kitchens, quiet evenings and a table full of people you love.</p>
          <a className="primary-cta" href="#discover">Explore recipes <FiArrowDown /></a>
        </div>
        <div className="hero-visual">
          <img src={foodImages[0]} alt="Colorful healthy dishes arranged on a table" />
          <div className="hero-badge">
            <span className="hero-badge-icon"><FiHeart /></span>
            <div><strong>Made to be shared</strong><span>Fresh picks every week</span></div>
          </div>
        </div>
      </section>
      <div id="discover">
        <Popular />
        <Veggie />
      </div>
    </main>
  );
}

export default Home;
