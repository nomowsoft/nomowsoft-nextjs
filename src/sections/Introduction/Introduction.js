import React from "react";
import { IntroContainer, MainTitle, Description } from "./Introduction.styles";
import Image from "next/image";

const Introduction = () => {
  return (
    <IntroContainer>
      <div>
        <MainTitle>
          We make
          <span>
            {" "}
            products
            <Image src="/assets/circle.svg" alt="" width="12px" height="12px" />
          </span>
          <br />
          that make your life easier
        </MainTitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s
        </Description>
      </div>
    </IntroContainer>
  );
};

export default Introduction;
