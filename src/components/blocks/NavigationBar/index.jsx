import React from "react";
import Logo from "../Logo";
import { Wrapper, Button } from "./styles";

const NavigationBar = ({ isBlackBtnColor, IconColor, setPage }) => {
  return (
    <Wrapper>
      <Logo
        isBlackBtnColor={isBlackBtnColor}
        IconColor={IconColor}
        setPage={setPage}
      />
      <Button
        isBlack={isBlackBtnColor}
        onClick={() => {
          setPage("Our coffee");
        }}
      >
        Our coffee
      </Button>
      <Button
        isBlack={isBlackBtnColor}
        onClick={() => {
          setPage("For your pleasure");
        }}
      >
        For your pleasure
      </Button>
    </Wrapper>
  );
};

export default NavigationBar;
