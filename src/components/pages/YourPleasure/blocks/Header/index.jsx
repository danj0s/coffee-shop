import React from "react";
import NavigationBar from "../../../../blocks/NavigationBar";
import { TitleDescription, Wrapper } from "./styles";

const HeaderPleasure = ({ setPage }) => {
  return (
    <Wrapper>
      <NavigationBar setPage={setPage} />
      <TitleDescription isWhite isBold>
        For your pleasure
      </TitleDescription>
    </Wrapper>
  );
};

export default HeaderPleasure;
