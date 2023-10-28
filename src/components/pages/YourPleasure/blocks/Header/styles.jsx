import styled from "styled-components";
import img from "../../../../png/backgroundImage/PleasureBackground.png";
import { Description } from "../../../../styles";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 260px;
  background-image: url(${img});
  text-align: center;
  > *:first-child {
    padding: 30px 0 0 149px;
  }
  >*: last-child {
    margin-top: 60px;
  }
`;

const TitleDescription = styled(Description)`
  font-size: 40px;
  line-height: 58px;
`;
export { Wrapper, TitleDescription };
