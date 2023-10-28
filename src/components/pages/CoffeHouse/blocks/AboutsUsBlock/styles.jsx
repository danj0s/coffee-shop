import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 80px 0 100px 0;
  text-align: center;
`;

const DescriptionWrapper = styled.div`
  max-width: 589px;
  margin: 40px auto 20px auto;

  :first-child {
    margin: 0 0 20px 0;
  }
`;

export { Wrapper, DescriptionWrapper };
