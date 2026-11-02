import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCroissant } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <nav className="category-list" aria-label="Recipe categories">
      <NavLink className="category-link" to={"/cuisine/Vietnamese"}>
        <GiNoodles />
        <span>Vietnamese</span>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/Korean"}>
        <GiChopsticks />
        <span>Korean</span>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <span>Italian</span>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/French"}>
        <GiCroissant />
        <span>French</span>
      </NavLink>
      <NavLink className="category-link" to={"/cuisine/American"}>
        <IoFastFood />
        <span>American</span>
      </NavLink>
    </nav>
  );
}

export default Category;
