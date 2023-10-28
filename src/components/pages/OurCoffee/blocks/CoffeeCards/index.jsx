import React from "react";
import CoffeeBeansCard from "../../../../blocks/CoffeeBeansCard";

import { Wrapper } from "./styles";
const CoffeeCards = ({ openCoffeeCards, coffeeData }) => {
  const cards = coffeeData.map((el, i) => (
    <CoffeeBeansCard
      alt={el.alt}
      cost={el.cost}
      country={el.country}
      name={el.name}
      src={el.photo}
      key={i}
      isBoxShadow={true}
      isPointer={true}
      onClick={() => {
        openCoffeeCards(el);
      }}
    />
  ));
  return <Wrapper>{cards}</Wrapper>;
};

export default CoffeeCards;
