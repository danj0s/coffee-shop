import styled from "styled-components";
import img from "../../../../png/backgroundImage/OurBestBackground.png";
import { Description } from "../../../../styles";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 495px;
  background-image: url(${img});
  background-size: 100vw 100vh;
  text-align: center;
`;

const CoffeeCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const TitleDescription = styled(Description)`
  font-size: 24px;
  line-height: 35px;
  padding: 80px 0 39px 0;
`;
export { Wrapper, CoffeeCardsWrapper, TitleDescription };
