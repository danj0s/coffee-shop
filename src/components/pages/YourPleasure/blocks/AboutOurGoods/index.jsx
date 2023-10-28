import React from "react";
import { Description } from "../../../../styles";
import About from "../../../../blocks/About";
import img from "../../../../png/coffeeBeansImage/CoffeeCup.png";

const AboutOurGoods = () => {
  const description = (
    <>
      <Description>
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible.
      </Description>

      <Description>
        Afraid at highly months do things on at. Situation recommend objection
        do intention so questions.
      </Description>
      <Description>
        As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed.
        At it went is song that held help face.
      </Description>
      <Description>
        Last ask him cold feel met spot shy want. Children me laughing we
        prospect answered followed. At it went is song that held help face.
      </Description>
    </>
  );
  return (
    <About
      src={img}
      alt={"qwe"}
      title={"About Our Goods"}
      descriptionNode={description}
    />
  );
};

export default AboutOurGoods;
