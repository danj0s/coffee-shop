import React from "react";
import CoffeeBeansWithLineIcon from "../../icons/coffeeBeansWithLineIcon";
import { StyledDescription } from "./styles";

const DescriptionWithBeans = ({ text, beansColor }) => {
  return (
    <>
      <StyledDescription>{text}</StyledDescription>
      <CoffeeBeansWithLineIcon color={beansColor} />
    </>
  );
};

export default DescriptionWithBeans;
