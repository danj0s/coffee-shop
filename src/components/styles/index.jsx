import styled from "styled-components";

const Description = styled.p(
  ({ isBold, isSmallSize, isDefaultHeight, isWhite }) => ({
    color: isWhite ? "white" : "black",
    fontSize: isSmallSize ? "12px" : "14px",
    fontWeight: isBold ? 700 : 400,
    lineHeight: isDefaultHeight ? "21px" : "18px",
    margin: 0,
    padding: 0,
  })
);

export { Description };
