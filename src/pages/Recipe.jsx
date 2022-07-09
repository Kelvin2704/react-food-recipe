import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const getRecipeDetails = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getRecipeDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
          Instructions
        </Button>
        <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients?.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}

        {/* <ul>
          {details.extendedIngredients.map((ingredient) => {
            <li key={ingredient.id}>{ingredient.original}</li>;
          })}
        </ul> */}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
  div {
    p {
      font-size: 1rem;
    }
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 0.5rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;
