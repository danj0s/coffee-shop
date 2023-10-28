import React from "react";
import { Wrapper, CoffeeCardsWrapper, TitleDescription } from "./styles";
import { COFFEEBEANSDATA } from "../../../../../helpers/consts";
import CoffeeBeansCard from "../../../../blocks/CoffeeBeansCard";

function OurBestBlock() {
  const CoffeeBeansCards = COFFEEBEANSDATA.map((el, i) => {
    return (
      <CoffeeBeansCard
        alt={el.alt}
        cost={el.cost}
        name={el.name}
        src={el.photo}
        key={i}
        isSmallHeight={true}
      />
    );
  });

  return (
    <Wrapper>
      <TitleDescription>Our Best</TitleDescription>
      <CoffeeCardsWrapper>{CoffeeBeansCards}</CoffeeCardsWrapper>
    </Wrapper>
  );
}

export default OurBestBlock;
