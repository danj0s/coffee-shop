import styled from "styled-components";

const Wrapper = styled.div(({ isCardOpen }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  boxSizing: "border-box",
  justifyContent: "center",
  "> *:first-child": {
    marginRight: isCardOpen ? "55px" : "79px",
  },
  padding: "70px 0 60px 0",
}));

const DescriptionWrapper = styled.div(({ isCardOpen }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: isCardOpen ? "inherit" : "center",
}));

const DescriptionTextWrapper = styled.div(({ isCardOpen }) => ({
  maxWidth: "346px",
  width: "100%",
  marginTop: "25px",

  ":first-child": {
    margin: isCardOpen ? 0 : "0 0 10px 0",
  },
}));
const Line = styled.div(({ isCardOpen }) => ({
  position: "absolute",
  bottom: "0",
  margin: "0 auto",
  height: "1px",
  width: "200px",
  borderTop: isCardOpen ? "" : "solid 1px black",
}));

export { Wrapper, DescriptionWrapper, DescriptionTextWrapper, Line };
