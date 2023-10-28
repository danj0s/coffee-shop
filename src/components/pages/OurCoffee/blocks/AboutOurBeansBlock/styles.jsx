import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  > *:first-child {
    margin-right: 79px;
  }
  padding: 70px 0 60px 0;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const DescriptionTextWrapper = styled.div`
  max-width: 346px;
  margin-top: 25px;
  :first-child {
    margin-bottom: 10px;
  }
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  height: 1px;
  width: 200px;
  border-top: solid 1px black;
`;

export { Wrapper, DescriptionWrapper, DescriptionTextWrapper, Line };
