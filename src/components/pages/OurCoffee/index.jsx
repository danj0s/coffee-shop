import React, { useEffect, useState } from "react";
import {
  Wrapper,
  BeansDescriptions,
  TitleDescription,
  PriceDescription,
} from "./styles";
import HeaderOurCoffee from "./blocks/Header";
import AboutOurBeansBlock from "./blocks/AboutOurBeansBlock";
import CoffeeCards from "./blocks/CoffeeCards";
import Footer from "../../blocks/Footer";
import About from "../../blocks/About";
import beansImg from "../../png/coffeeBeansImage/AromisticoBeansImage.jpg";
import FilterBarBlock from "./blocks/FilterBarBlock";
import { COFFEEBEANSDATAFORSALE } from "../../../helpers/consts";
import { Description } from "../../styles";

const OurCoffeePage = ({ setPage }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardsDetails, setCardsDetails] = useState({});
  const [coffeeData, setCoffeeData] = useState(COFFEEBEANSDATAFORSALE);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("");

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

  const updateSearch = (coffeeName) => {
    setFilter("");

    setSearchValue(coffeeName);
  };
  const updateFilter = (coffeeCountry) => {
    setSearchValue("");

    setFilter(coffeeCountry);
  };

  useEffect(() => {
    if (searchValue.length === 0 && filter.length === 0) {
      return setCoffeeData(COFFEEBEANSDATAFORSALE);
    }
    if (searchValue.length !== 0) {
      return setCoffeeData(
        COFFEEBEANSDATAFORSALE.filter((el) => el.name.indexOf(searchValue) > -1)
      );
    }

    return setCoffeeData(
      COFFEEBEANSDATAFORSALE.filter((el) => el.country.indexOf(filter) > -1)
    );
  }, [searchValue, filter]);

  return (
    <Wrapper>
      <HeaderOurCoffee setPage={setPage} />
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
          <AboutOurBeansBlock />
          <FilterBarBlock
            data={COFFEEBEANSDATAFORSALE}
            updateSearch={updateSearch}
            updateFilter={updateFilter}
            searchValue={searchValue}
          />
          <CoffeeCards
            openCoffeeCards={openCoffeeCards}
            coffeeData={coffeeData}
          />
        </>
      )}
      <Footer />
    </Wrapper>
  );
};

export default OurCoffeePage;
