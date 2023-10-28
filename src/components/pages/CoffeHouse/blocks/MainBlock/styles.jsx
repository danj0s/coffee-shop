import styled from "styled-components";
import img from "../../../../png/backgroundImage/CoffeShopBackgroundImage.png";
import { Description } from "../../../../styles";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 640px;
  background-image: url(${img});
  background-size: 100vw 100vh;
  text-align: center;
  > *:first-child {
    padding: 30px 0 0 149px;
  }
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
  color: white;
  margin: 111px 0 0 0;
`;

const MoreBtn = styled.button`
  width: 120px;
  height: 30px;
  margin-top: 18px;
  border-radius: 3px;
  border: solid 1px;
  border-color: white;
  color: white;
`;

const TitleDescription = styled(Description)`
  font-size: 24px;
  line-height: 35px;

  margin: 35px 0 20px 0;
`;
const ParagraphDescription = styled(Description)`
  font-size: 24px;
  line-height: 35px;
`;

export { Wrapper, Text, MoreBtn, ParagraphDescription, TitleDescription };
