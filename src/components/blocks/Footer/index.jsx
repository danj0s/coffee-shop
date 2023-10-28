import React from "react";
import { Wrapper } from "./styles";
import NavigationBar from "../NavigationBar";
import CoffeeBeansWithLineIcon from "../../icons/coffeeBeansWithLineIcon";

const Footer = () => {
  return (
    <Wrapper>
      <NavigationBar isBlackBtnColor={true} IconColor={"black"} />
      <CoffeeBeansWithLineIcon color="black" />
    </Wrapper>
  );
};

export default Footer;
