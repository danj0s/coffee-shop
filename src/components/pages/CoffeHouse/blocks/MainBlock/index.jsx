import React from "react";
import NavigationBar from "../../../../blocks/NavigationBar";
import {
  MoreBtn,
  ParagraphDescription,
  Text,
  TitleDescription,
  Wrapper,
} from "./styles";
import CoffeeBeansWithLineIcon from "../../../../icons/coffeeBeansWithLineIcon";

const MainBlock = ({ setPage }) => {
  return (
    <Wrapper>
      <NavigationBar setPage={setPage} />
      <Text>Everything You Love About Coffee</Text>
      <CoffeeBeansWithLineIcon />
      <TitleDescription isWhite isBold>
        We makes every day full of energy and taste
      </TitleDescription>
      <ParagraphDescription isWhite isBold>
        Want to try our beans?
      </ParagraphDescription>
      <MoreBtn>More</MoreBtn>
    </Wrapper>
  );
};

export default MainBlock;
