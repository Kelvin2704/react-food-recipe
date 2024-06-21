import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiCroissant } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Vietnamese"}>
        <GiNoodles />
        <h4>Vietnamese</h4>
      </Slink>
      <Slink to={"/cuisine/Korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </Slink>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/French"}>
        <GiCroissant />
        <h4>French</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <IoFastFood />
        <h4>American</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
