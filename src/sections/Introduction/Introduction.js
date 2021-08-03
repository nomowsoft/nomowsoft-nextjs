import React from "react";
import { IntroContainer, MainTitle } from "./Introduction.styles";
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
      </div>
    </IntroContainer>
  );
};

export default Introduction;
