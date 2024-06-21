import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`);
    const recipes = await api.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
    // console.log(params.type);
  }, [params.type]);
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <Gradient />
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1.5rem;
`;
const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    text-direction: none;
  }
  h4 {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.6rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;
export default Cuisine;
