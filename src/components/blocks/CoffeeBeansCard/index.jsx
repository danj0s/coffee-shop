import React from "react";
import { DescriptionWrapper, Image, Wrapper } from "./styles";
import { Description } from "../../styles";

const CoffeeBeansCard = ({
  src,
  alt,
  cost,
  name,
  country,
  isBoxShadow,
  isPointer,
  isSmallHeight,
}) => {
  return (
    <Wrapper
      isSmallHeight={isSmallHeight}
      isBoxShadow={isBoxShadow}
      isPointer={isPointer}
    >
      <Image src={src} alt={alt}></Image>
      <DescriptionWrapper>
        <Description
          isSmalSize={false}
          isDefaultHeight
          isBold={false}
          isWite={false}
        >
          {name}
        </Description>
        {country && (
          <Description isSmalSize={false} isDefaultHeight isBold isWite={false}>
            {country}
          </Description>
        )}
        <Description isSmalSize={false} isDefaultHeight isBold isWite={false}>
          {cost}
        </Description>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default CoffeeBeansCard;
