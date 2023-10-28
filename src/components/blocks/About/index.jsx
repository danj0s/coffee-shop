import React from "react";
import {
  DescriptionWrapper,
  Wrapper,
  DescriptionTextWrapper,
  Line,
} from "./styles";
import DescriptionWithBeans from "../DescriptionWithBeans";

const About = ({ src, alt, title, descriptionNode, isCardOpen }) => {
  return (
    <Wrapper isCardOpen={isCardOpen}>
      <img src={src} alt={alt}></img>
      <DescriptionWrapper isCardOpen={isCardOpen}>
        <DescriptionWithBeans beansColor={"black"} text={title} />
        <DescriptionTextWrapper isCardOpen={isCardOpen}>
          {descriptionNode}
        </DescriptionTextWrapper>
      </DescriptionWrapper>
      <Line isCardOpen={isCardOpen} />
    </Wrapper>
  );
};

export default About;
