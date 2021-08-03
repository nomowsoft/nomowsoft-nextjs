import React from "react";
import { IntroContainer, MainTitle } from "./Introduction.styles";
// import Image from "next/image";
import { SplitLetters } from "animation/Text";

const container = {
  hidden: {
    y: "200%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const Introduction = () => {
  return (
    <IntroContainer>
      <div>
        <MainTitle animate="visible" initial="hidden" variants={container}>
          We make
          <SplitLetters
            initial={{ y: "100%" }}
            animate="visible"
            variants={{
              visible: (i) => ({
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 1,
                },
              }),
            }}
          >
            products
            {/* <Image src="/assets/circle.svg" alt="" width="12px" height="12px" /> */}
          </SplitLetters>
          <br />
          that make your life easier
        </MainTitle>
      </div>
    </IntroContainer>
  );
};

export default Introduction;
