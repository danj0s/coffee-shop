import styled from "styled-components";

const Wrapper = styled.div``;
const Button = styled.button(({ isBlack }) => ({
  color: isBlack ? "black" : "white",
}));
export { Wrapper, Button };
