import React from "react";
import NavigationBar from "../../../../blocks/NavigationBar";
import { TitleDescription, Wrapper } from "./styles";

const HeaderOurCoffee = ({ setPage }) => {
  return (
    <Wrapper>
      <NavigationBar setPage={setPage} />
      <TitleDescription isWhite isBold>
        Our Coffee
      </TitleDescription>
    </Wrapper>
  );
};

export default HeaderOurCoffee;
