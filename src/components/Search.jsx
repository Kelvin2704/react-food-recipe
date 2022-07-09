import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input onChange={handleChange} type="text" value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 2rem 10rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
