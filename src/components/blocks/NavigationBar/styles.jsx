import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  > button {
    font-size: 12px;
  }
  > *:not(:last-child) {
    margin-right: 20px;
  }
`;
const Button = styled.button(({ isBlack }) => ({
  color: isBlack ? "black" : "white",
}));
export { Wrapper, Button };
