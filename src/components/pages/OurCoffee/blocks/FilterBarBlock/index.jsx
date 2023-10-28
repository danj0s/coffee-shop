import React from "react";
import FilterButtons from "../../../../blocks/FilterButtons";
import { Description } from "../../../../styles";
import { Input, SearchWrapper, Wrapper, ButtonsWrapper } from "./styles";

const FilterBarBlock = ({ updateSearch, updateFilter, searchValue, data }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Description color="black">Lookiing for</Description>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => {
            updateSearch(e.target.value);
          }}
          placeholder="start typing here..."
        />
      </SearchWrapper>
      <ButtonsWrapper>
        <Description>Or Filter</Description>
        <FilterButtons updateFilter={updateFilter} data={data} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default FilterBarBlock;
