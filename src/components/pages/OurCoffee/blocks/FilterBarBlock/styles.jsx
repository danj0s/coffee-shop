import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 60px 0;

  align-items: center;
`;
const SearchWrapper = styled.div`
  width: 100%;
  max-width: 285px;
  display: flex;
  flex-direction: row;
  margin-right: 83px;
  align-items: center;

  :first-child {
    margin-right: 15px;
  }
`;
const Input = styled.input`
  width: 100%;
  max-width: 180px;
  height: 30px;
  border: 4px;
  border-radius: 4px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 326px;
  align-items: center;
  text-align: center;

  > :not(:last-child) {
    margin-right: 5px;
  }
  > :first-child {
    margin-right: 25px;
  }
`;

export { Input, SearchWrapper, Wrapper, ButtonsWrapper };
