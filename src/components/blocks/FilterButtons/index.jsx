import React from "react";
import { Button } from "./styles";
const FilterButtons = ({ data, updateFilter }) => {
  const uniqueCountry = [...new Set(data.map((item) => item.country))].map(
    (el, i) => (
      <Button
        key={i}
        onClick={(e) => {
          updateFilter(e.target.childNodes[0].data);
        }}
      >
        {el}
      </Button>
    )
  );

  return uniqueCountry;
};

export default FilterButtons;
