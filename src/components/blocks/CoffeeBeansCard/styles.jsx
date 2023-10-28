import styled from "styled-components";

const Wrapper = styled.div(({ isPointer, isBoxShadow, isSmallHeight }) => ({
  width: "100%",
  maxWidth: "220px",
  height: isSmallHeight ? "240px" : "260px",
  background: "#ffffffa6",
  borderRadius: "6px",
  boxSizing: "border-box",
  padding: "22px 0px 80px",
  cursor: isPointer ? "pointer" : "none",
  boxShadow: isBoxShadow ? "5px 5px 15px 0px rgba(0, 0, 0, 0.25)" : "none",
}));

const DescriptionWrapper = styled.div`
  padding: 0 20px;
  text-align: end;
  :first-child {
    margin: 10px 0;
    text-align: center;
  }
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export { Wrapper, DescriptionWrapper, Image };
