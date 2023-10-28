import React from "react";
import CoffeeBeansIcon from "../../icons/coffeeBeansIcon";
import { Wrapper, Button } from "./styles";

const Logo = ({ isBlackBtnColor, IconColor, setPage }) => {
  return (
    <Wrapper>
      <CoffeeBeansIcon color={IconColor} />
      <Button
        onClick={() => {
          setPage("Coffee house");
        }}
        isBlack={isBlackBtnColor}
      >
        Coffee house
      </Button>
    </Wrapper>
  );
};

export default Logo;
