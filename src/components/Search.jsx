import { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;
    navigate("/searched/" + encodeURIComponent(query));
    setInput("");
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-field">
        <FiSearch className="search-icon" />
        <input
          aria-label="Search recipes"
          onChange={handleChange}
          placeholder="Search recipes, ingredients..."
          type="search"
          value={input}
        />
        <button className="search-submit" aria-label="Submit search" type="submit">
          <FiArrowRight />
        </button>
      </div>
    </form>
  );
}

export default Search;
