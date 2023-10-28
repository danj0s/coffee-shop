import styled from "styled-components";
import { Description } from "../../styles";

const Wrapper = styled.div``;

const BeansDescriptions = styled(Description)`
  margin: 16px 0 16px 0;
`;

const TitleDescription = styled(Description)`
  display: flex;
  align-items: baseline;
  :first-child {
    padding-left: 5px;
  }
`;
const PriceDescription = styled(Description)`
  font-size: 25px;
`;
export { Wrapper, BeansDescriptions, PriceDescription, TitleDescription };
