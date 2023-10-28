import React, { useState } from "react";
import {
  BeansDescriptions,
  PriceDescription,
  TitleDescription,
  Wrapper,
} from "./styles";
import HeaderPleasure from "./blocks/Header";
import AboutOurGoods from "./blocks/AboutOurGoods";
import About from "../../blocks/About";
import CoffeeCards from "../OurCoffee/blocks/CoffeeCards";
import { Description } from "../../styles";
import { COFFEEBEANSDATAFORSALE } from "../../../helpers/consts";
import beansImg from "../../png/coffeeBeansImage/AromisticoBeansImage.jpg";

const YourPleasurePage = ({ setPage }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardsDetails, setCardsDetails] = useState({});

  const openCoffeeCards = (props) => {
    setIsCardOpen(!isCardOpen);

    setCardsDetails({
      ...props,
    });
  };
  const description = (
    <>
      <TitleDescription isBold color="black">
        Country:
        <Description isBold={false}> {cardsDetails.country}</Description>
      </TitleDescription>

      <BeansDescriptions color="black">
        <strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </BeansDescriptions>
      <TitleDescription isBold color="black">
        Price:
        <PriceDescription isBold>{cardsDetails.cost}</PriceDescription>
      </TitleDescription>
    </>
  );
  return (
    <Wrapper>
      <HeaderPleasure setPage={setPage} />

      {isCardOpen ? (
        <About
          alt={beansImg}
          descriptionNode={description}
          src={beansImg}
          title={"About it"}
          isCardOpen={isCardOpen}
        />
      ) : (
        <>
          <AboutOurGoods />
          <CoffeeCards
            openCoffeeCards={openCoffeeCards}
            coffeeData={COFFEEBEANSDATAFORSALE}
          />
        </>
      )}
    </Wrapper>
  );
};

export default YourPleasurePage;
